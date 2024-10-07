FROM php:8.1-fpm
WORKDIR /var/www/symfony
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libicu-dev \
    libzip-dev \
    zip \
    libonig-dev \
    libxml2-dev \
    && docker-php-ext-install pdo pdo_mysql intl opcache zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY . /var/www/symfony

RUN chown -R www-data:www-data /var/www/symfony

RUN composer install --no-interaction

EXPOSE 9000

CMD ["php-fpm"]
