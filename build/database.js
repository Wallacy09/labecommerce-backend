"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.users = void 0;
exports.users = [
    { id: "U001",
        name: "Wallacy Vinicius",
        email: "wallacy@hotmail.com",
        passowd: "1234",
        createdAT: new Date().toISOString()
    },
    { id: "U002",
        name: "Joao Pedro",
        email: "joao@hotmail.com",
        passowd: "12345",
        createdAT: new Date().toISOString()
    },
];
exports.products = [
    {
        id: "prod001",
        name: "Mouse Gamer",
        price: 2000,
        description: "Melhor mouse game do mercado",
        imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400",
    },
    {
        id: "prod002",
        name: "Monitor",
        price: 900,
        description: "Monitor LED Full HD 24 polegadas",
        imageUrl: "https://picsum.photos/seed/Monitor/400",
    },
];
