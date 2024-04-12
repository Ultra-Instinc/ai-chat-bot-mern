const expires = new Date();
expires.setDate(expires.getDate() + 2);
export const cookieOptions = {
    secure: process.env.NODE_ENV !== "development",
    httpOnly: true,
    path: "/",
    domain: "localhost",
    expires,
    signed: true,
};
export const cookieName = "auth_token";
//# sourceMappingURL=constants.js.map