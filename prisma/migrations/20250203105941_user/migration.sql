-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "login" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "name" VARCHAR(255),
    "deleted_at" BIGINT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
