<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\Request;

class ProductController extends AbstractController
{
    #[Route('/api/products', name: 'get_products', methods: ['GET'])]
    public function getProducts(): JsonResponse
    {
        $client = HttpClient::create();
        $response = $client->request('GET', 'https://dummyjson.com/products');

        if ($response->getStatusCode() === 200) {
            $data = $response->toArray();
            return new JsonResponse($data, 200);
        } else {
            return new JsonResponse([], 500);
        }
    }

    #[Route('/api/products', name: 'add_product', methods: ['POST'])]
    public function addProduct(Request $request): JsonResponse
    {
        $client = HttpClient::create();
        $data = json_decode($request->getContent(), true);

        if (!isset($data['title'], $data['price'])) {
            return new JsonResponse(['message' => 'Invalid data'], 400);
        }

        $payload = [
            'title' => $data['title'],
            'price' => $data['price'],
            'description' => $data['description'] ?? '', 
            'thumbnail' => $data['thumbnail'] ?? '',
            'discountPercentage' => $data['discountPercentage'] ?? 0,
            'rating' => $data['rating'] ?? 0,
            'stock' => $data['stock'] ?? 0,
            'brand' => $data['brand'] ?? 'Unknown',
            'category' => $data['category'] ?? 'Uncategorized'
        ];

        try {
            $response = $client->request('POST', 'https://dummyjson.com/products/add', [
                'json' => $payload
            ]);

            $responseData = $response->toArray();

            return new JsonResponse($responseData, 201); 
        } catch (\Exception $e) {
            return new JsonResponse(['message' => 'Error adding product', 'error' => $e->getMessage()], 500);
        }
    }
}
