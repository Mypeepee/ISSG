const crypto = require("crypto");

const alicePrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCpPdr2j160x9Mf
Wi04LINmFFNAM83FkRaK+fKpsAxjCoEVlhVsRP6UFxFFIkQKjLhRKCVMYQ0/fLxL
oHv+m7B/xVWVTwZg81I1dWDaCLfQ7nojFqGWa5r4Ao6tA+zJWGnTmXXfV1Dd49Qv
Ga1j3YBaCIFmZ59ucdY/4vSmnwahVG0aDSV3rv0dqx4rK6u0uUBcoqrckeRGWqAC
3NKwgDodnxmyhNcIvhgdpYUUU0iz5IKZpVZXs3ro8krLBWMKZLOumblGKXMd06Vo
HhKts1Y1LGJBAmGDNE4QmDYNZiiNss8NA4WYnRaT756Ei+usxKQ1KlhVsW1z9Jdu
41opWpCtAgMBAAECggEABKpCU2KPUz9g1+/l6DL96j3sL4xeAzClJO6P3FKQfNho
x34MGCBsvgtGvBeeNYY8fGw1Xv4b3eCj1hfV4yZKfrMjUUrM27ZJUVTrdwcffgBc
2IPCr4FG08hKQ4WkrMYloKINyDrBbWRe0G+OQn70D0dFvdtkXyh/JeKtKLygc6jz
B8U2/rapyKgGGNy7kY+lnib/y3QptUnR3GzSJiX+LuYNU7o79/gsNGeTSUfqaPZp
C4oJwA4W5nyzSMaPzscGmRbtAm8IHtWFkYXuIDE6XyqMnwgSU3s15Bel8rxpBX76
rDrEXmoKaH92HVAldg333/x6Nx8drUVDzSuV+pkr0QKBgQDtcquAh13rBUlA3mrF
Ak5WXXDGy06wGY+1MIlOceQdQTA7DbGNabhY5V67MMow4djZY65bXrJW4Wn2E55Y
bX2oCh+0Q8YVvJBG0eud4hg1TezBNIuOl5CkMSP+LmcnC7hHwx5G1nhPSt5jvps5
jU16wPrkfGNC41+RblS43Q+wCQKBgQC2dvPaFx947oi6YmNz8M+AziV/rBZUWaPa
2C5y466zX3thDHpWIjnxTbS6mr0S4LzwkbXk7Go5s0V52RSf/6CiDUSmyrCpAGJG
s75x8ZroKcr16/wxk1k2ekRinPqlsU9Ret1v5/5CJJhnzFnggS9TH4jFvlVZ6YOD
EiUtI+I8hQKBgBIqkcB1mtPeRap22chU0tV8tKIg79Y9PmdoXTjpMcCjOiNqeskM
65OxiLvdkbqHrOWE4NQQvKg0+rxe5+BwEAsJKz/JZ6BGGuuwJ8yefaemXJSzhnHU
WraVI+HQfwfXt7OV0/0rb2zxl24eKRYQH3tixE8yzQ1TA/7GaCj0kLyxAoGBAIaX
W+ylXcvAeA60AJRHL2jdpv90GsyBisIk8K5CkF0zszi1EZBzkrYSEZwMBCfmqrfx
Y3DHituhB0CIBhS3ZO/kRZ2aqZEf/V4VvAckppVWLqYUOmT/QbFToxnynViXX+DE
do7TW9PCVsFKFYnrANOZ0TO74A2AmEeYnN+dNoZZAoGAGacub3PPFGX4P1MHOgCa
kQrSbPWAhWOcUKamtXvobxicL8eolOOnZIC3rH+E2iu03bkkCZO7dcc338oLq9p8
szKfH8hfi77DymO/kSTsdbdTSfjP1mtTpj6BnB+BeeeTxo7kkkzfj88qs+7gNd+P
q56ZCRNuIjTbQJplCOOljWY=
-----END PRIVATE KEY-----`;
// Alice's private key (used to sign messages she sends).
const alicePrivateKey = crypto.createPrivateKey(alicePrivateKeyPem);

const bobPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7o31uZ40/il30ldSVrqx
eZlkT3XxPPf8WKxyYu0UswgwtPgrqhYjPmIIMFIi+stpZSD6lRQO93i+qgD+kPcA
DsrHsG/o2roLOnBuLp938HhjaEQgg/90ENLpkIwEVXgOOzp+yNWX0i41aT4dxl7F
T2wvxYwDsVvP6VJjdJKusXEOzRC1Pep0Oe429SXhR7NaxHUI5okMwRfbPZDBSktG
2YxIoO7b9hBJhFFjR2/7NLnlKWXKk6Up4RKY+j1AcRdQx69SNYORAeXPlQQLvaa1
iQzXRLAuvsjoDIJ3oDi1Om7DvvBeNJldvB7Z1uzfwqqdY1RyGY3rgelRl+BwwKxH
FQIDAQAB
-----END PUBLIC KEY-----`;
// Bob's public key (shared with others, like Alice, so they can encrypt messages specifically for him).
const bobPublicKey = crypto.createPublicKey(bobPublicKeyPem);

const message = "I want some apples";
const data = Buffer.from(message);

const signature = crypto.sign("sha256", data, alicePrivateKey);
console.log("Signature:", signature.toString("hex"));

const ciphertext = crypto.publicEncrypt(bobPublicKey, data);
console.log("Message:", ciphertext.toString("hex"));