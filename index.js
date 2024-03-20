const jwt = require('jsonwebtoken');
const fs = require('fs');

// Generate JWT with private key
function generateJWT(payload) {
  const privateKey = fs.readFileSync('private_key.pem');

  const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });
  return token;
}

// Validate JWT with public key
function validateJWT(token) {
  const publicKey = fs.readFileSync('public_key.pem');

  try {
    const parts = token.split('.');

    if (parts.length !== 3) {
      throw new Error('Invalid JWT format');
    }

    const encodedPayload = parts[1];
    const decodedPayload = Buffer.from(encodedPayload, 'base64').toString('utf-8');
    const claims = JSON.parse(decodedPayload);
    console.log(claims);
  } catch (error) {
    console.error('Get claims from JWT failed:', error.message);
  }

  try {
    const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
    console.log('JWT is valid. Decoded payload:', decoded);
  } catch (error) {
    console.error('JWT validation failed:', error.message);
  }
}

const payload = {
  user_id: 123,
  username: 'example_user'
};
const token = generateJWT(payload);
console.log('Generated JWT:', token);

// Validate JWT
validateJWT(token);