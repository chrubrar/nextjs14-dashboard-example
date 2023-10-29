/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        POSTGRES_URL:"postgres://default:74YaAVEgXnZR@ep-empty-hall-18926869-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb",
        POSTGRES_PRISMA_URL:"postgres://default:74YaAVEgXnZR@ep-empty-hall-18926869-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15",    
        POSTGRES_URL_NON_POOLING:"postgres://default:74YaAVEgXnZR@ep-empty-hall-18926869.us-east-1.postgres.vercel-storage.com:5432/verceldb",
        POSTGRES_USER:"default",
        POSTGRES_HOST:"ep-empty-hall-18926869-pooler.us-east-1.postgres.vercel-storage.com",
        POSTGRES_PASSWORD:"74YaAVEgXnZR",
        POSTGRES_DATABASE:"verceldb",

    }
};

module.exports = nextConfig;
