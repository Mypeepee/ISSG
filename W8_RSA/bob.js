const crypto = require("crypto");

const bobPrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDujfW5njT+KXfS
V1JWurF5mWRPdfE89/xYrHJi7RSzCDC0+CuqFiM+YggwUiL6y2llIPqVFA73eL6q
AP6Q9wAOysewb+jaugs6cG4un3fweGNoRCCD/3QQ0umQjARVeA47On7I1ZfSLjVp
Ph3GXsVPbC/FjAOxW8/pUmN0kq6xcQ7NELU96nQ57jb1JeFHs1rEdQjmiQzBF9s9
kMFKS0bZjEig7tv2EEmEUWNHb/s0ueUpZcqTpSnhEpj6PUBxF1DHr1I1g5EB5c+V
BAu9prWJDNdEsC6+yOgMgnegOLU6bsO+8F40mV28HtnW7N/Cqp1jVHIZjeuB6VGX
4HDArEcVAgMBAAECggEAcnu/Vua1gNouzkuo0MWE4Zn7OWUdMkjCml2cAZzMh8Tg
9yB4eAZqwIf0bRgmAFz5RhanGz9GlX4lZlnW0YQwS2kGn0Z9peaN9+w3/Hj8avOj
pUi4oBBKx74oZ/3CILBeiA8hBEn5M92INWshh+84Ws7NOE1jAk1RAKTQ5QN2AeIW
TWt9fCfKEaCzmtZ/3S4kKHYDSu3pnDTMImaXCBn+oT7RzG8B9pjQq5RkN+lZbC5G
4erVwMTHGAWehFyOdJjLMNVtFzxLdbj+Ck3j5OpjtuRPtL7pMJTtl6+TaT+nkbjQ
BcmlvSW4jsDU4hDt68j6CPVp/GNqtnj0cAtTmBP3KwKBgQD+0Ne651elm8V+8puT
+nPOMli1Yh/ZxL/kV9CfZ69lopzkuVGQN18FzMZeooOl5/2yF9OKeT4LEoryg+hi
KGnqa0hTl24G27NxG/SB3oyqersZgK/+dlfYCIk3i8/89d+T3eYZ3QCiCiLDyniP
US+PCkMl9a3Bdd40WIVLlArq8wKBgQDvqcVdbnkRcJmYgGSBJRqmYVyYAwDPPjzh
qfbE+Jbmijop3zt40Q2MVaLoxaXF6OLWVm4JS3vdcaoWlY/vJtwU6nj5tDl8eYRt
86u+DjYAWaVwalOkwm+OKjYyvpsWruH544qnyMj5dDw0PSu/GSfSpBokNp4fmt27
rM9eRQ531wKBgBaCIhw7ZS2WxepByeZXYDVdkyJqiX+19nFYJHCAOykSJSO7Du5b
RcSAYyFm35QfGvTJUAFSVl2qBKYJatSI11pCob/oh2qJq58ZJg72tpw0fSRyjpk+
oOHPVzeV3QhuO5KXLkUolW660HlVADNAq5/J+0Z2HiQRolAjZZrYd+JrAoGBAI03
I6wh5AR6rIZHYPEXw9Q1mjGX02pJ6eWuGFGHiKLe39a8Snat96Ww8AToMP2kc8SH
uN6RM7MPvoEAL4djBlrsrcu0fgryLy36Xj/mb7tVFz5d6Fs0ljbWeIj99rQu58gu
YwzqKkGSU8cUJCq9z9E2EJE1/YXx4qUq9iU924CRAoGBAJm37Jv8kDlasWGMzvdU
GPEePK2r3Kv5P0TpWCsAUAxjsns12f2TaQNizoh2Gi+7DeVZ3lO3Vj3pwPhAcxNd
MSkcX4u4GJfSNnMwYcmEjNMQCRWhIQlofZXJV8qYHt/LbrT62Ci8QaCftG4ow03g
qdH64yyS6Qh8NYqZrAo3hnYq
-----END PRIVATE KEY-----`;
// Bob's private key (used to decrypt messages only he can read).
const bobPrivateKey = crypto.createPrivateKey(bobPrivateKeyPem);

const alicePublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqT3a9o9etMfTH1otOCyD
ZhRTQDPNxZEWivnyqbAMYwqBFZYVbET+lBcRRSJECoy4USglTGENP3y8S6B7/puw
f8VVlU8GYPNSNXVg2gi30O56Ixahlmua+AKOrQPsyVhp05l131dQ3ePULxmtY92A
WgiBZmefbnHWP+L0pp8GoVRtGg0ld679HaseKyurtLlAXKKq3JHkRlqgAtzSsIA6
HZ8ZsoTXCL4YHaWFFFNIs+SCmaVWV7N66PJKywVjCmSzrpm5RilzHdOlaB4SrbNW
NSxiQQJhgzROEJg2DWYojbLPDQOFmJ0Wk++ehIvrrMSkNSpYVbFtc/SXbuNaKVqQ
rQIDAQAB
-----END PUBLIC KEY-----`;
// Alice's public key (shared with others so they can verify her signature).
const alicePublicKey = crypto.createPublicKey(alicePublicKeyPem);

// Ciphertext and signature from Alice (sender)
const ciphertextHex = "573face5bc326975bdf409b39e302a9b044f6aa3ff955fc46be90e6237f731cf5eb59f1291a7ad6ff04b1c7f501c7a79ab43c54eb790d64ea81875bd5719343d9d150454002a32105b812da39018d26410a86457fb7205c6dbefb688a6640e69843d5a0ae2ba939a2b7883b0ad958b8ee1e835bca049738d845b56d7124433bf7fcf0946df2dfb3b2c8ddb6b678b578c462971ae1d6278cd526ac4cbad6439e6b853c5b4a79298f9d5e9d83657a80490e9d357775e6a1ce5568e5d489871838c44760e8d2be361f20aa1ef311ad996ebd6a7d78078f267d31e64be621800f59bae3000c27ba817437c2333bc51b144ef88ce06ad6320abd31c9e847eb3c4c085";
const ciphertext = Buffer.from(ciphertextHex, "hex");

const signatureHex = "38d5a130404222935e3145bf34c06569deaad2895ed6a7e9912020376fb5e00cde660a19cc1a5069e23eb448ef0e53ac12e85d6f5298e15de50eabbc511a4e1ce46ea0e03ae76eaf27d4c9adccd4563886358b3ecedb04566ac992c3a5c7df84eac576d43577cd94666546edd530339d421019e8d5698d391b1e5a9adc32a475ab53ad910e1709c3d273e0e1b8c907348bf34865a9660bb0dec4c3bbbab5978e5099e842001b064d23320422b196a26cb9e4b1206be62d906baad48d34ec1ab951eacb6bf79c2ff4d5bffdde1ba0a846218e1f00550012851b252d3d1fc5017d3b882d9267a93728a33bbd7289d4b791cf11d41ccfdb22a218342ae99c64ee55";
const signature = Buffer.from(signatureHex, "hex");

// Decrypting message
const recoveredPlaintext = crypto.privateDecrypt(bobPrivateKey, ciphertext);
const message = recoveredPlaintext.toString("utf8");

// Bob Verifying signature
const data = Buffer.from(message);
const isValid = crypto.verify("sha256", data, alicePublicKey, signature);

// Results
console.log("Signature Verification:", isValid);
console.log("Message:", message);