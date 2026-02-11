import JsonWebToken from "jsonwebtoken";

const SECRET_KEY = "vhjyedjgvhloulkgjbnkloluj";

export const generateToken = (payload) => {
    return JsonWebToken.sign(payload, SECRET_KEY);
}

export const verifyToken = (token) => {
        const decoded = JsonWebToken.verify(token, SECRET_KEY);
        return decoded;
}