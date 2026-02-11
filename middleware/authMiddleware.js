import {verifyToken} from "../utils/tokens.js";

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];

    if(!verifyToken(token)) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const decodedUser = verifyToken(token);
    req.user = decodedUser;
    console.log("Decoded User:", decodedUser);
    next();
}
export default authMiddleware;