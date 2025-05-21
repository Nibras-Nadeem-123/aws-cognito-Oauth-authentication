(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/auth.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "confirmPasswordReset": (()=>confirmPasswordReset),
    "confirmSignUp": (()=>confirmSignUp),
    "redirectToGoogleOAuth": (()=>redirectToGoogleOAuth),
    "redirectToMicrosoftOAuth": (()=>redirectToMicrosoftOAuth),
    "sendResetEmail": (()=>sendResetEmail),
    "signIn": (()=>signIn),
    "signUp": (()=>signUp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/* eslint-disable @typescript-eslint/no-explicit-any */ // import necessary AWS cognito commands and types from the SDK
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$dist$2d$es$2f$CognitoIdentityProviderClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/CognitoIdentityProviderClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$dist$2d$es$2f$commands$2f$ConfirmForgotPasswordCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/commands/ConfirmForgotPasswordCommand.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$dist$2d$es$2f$commands$2f$ConfirmSignUpCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/commands/ConfirmSignUpCommand.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$dist$2d$es$2f$commands$2f$ForgotPasswordCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/commands/ForgotPasswordCommand.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$dist$2d$es$2f$commands$2f$InitiateAuthCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/commands/InitiateAuthCommand.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$dist$2d$es$2f$commands$2f$SignUpCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/commands/SignUpCommand.js [app-client] (ecmascript) <locals>");
"use client";
;
// Create an AWS Cognito client
const ClientId = ("TURBOPACK compile-time value", "7lj3ovlllcctnf1p113se109");
const region = "us-east-1";
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$dist$2d$es$2f$CognitoIdentityProviderClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CognitoIdentityProviderClient"]({
    region
});
async function signIn(email, password) {
    const input = {
        AuthFlow: "USER_PASSWORD_AUTH",
        ClientId: ClientId,
        AuthParameters: {
            USERNAME: email,
            PASSWORD: password
        }
    };
    try {
        const command = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$dist$2d$es$2f$commands$2f$InitiateAuthCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["InitiateAuthCommand"](input); // Create the auth command
        const response = await client.send(command); // Send the request to Cognito
        console.log("Cognito Sign-in Response:", response);
        return response; // Return the sign-in response
    } catch (error) {
        console.error("Error during sign-in:", error.message);
        throw new Error("Failed to sign in. Please check your credentials.");
    }
}
async function signUp(email, password) {
    const input = {
        ClientId: ClientId,
        Username: email,
        Password: password,
        UserAttributes: [
            {
                Name: "email",
                Value: email
            }
        ]
    };
    try {
        const command = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$dist$2d$es$2f$commands$2f$SignUpCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignUpCommand"](input);
        const result = await client.send(command);
        console.log("User successfully signed up:", result);
        return result;
    } catch (err) {
        console.error("Error during sign-up:", err.message);
        throw new Error("Failed to sign up. Please try again.");
    }
}
async function confirmSignUp(email, code) {
    const input = {
        ClientId: ClientId,
        Username: email,
        ConfirmationCode: code
    };
    try {
        const command = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$dist$2d$es$2f$commands$2f$ConfirmSignUpCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConfirmSignUpCommand"](input); // Create the confirm sign-up command
        const result = await client.send(command); // Send the request
        console.log("Sign-up confirmed:", result);
        return result; // Return the confirmation result
    } catch (err) {
        console.error("Error confirming sign-up:", err.message);
        throw new Error("Failed to confirm sign-up. Please try again.");
    }
}
async function sendResetEmail(email) {
    const input = {
        ClientId: ClientId,
        Username: email
    };
    try {
        const command = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$dist$2d$es$2f$commands$2f$ForgotPasswordCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ForgotPasswordCommand"](input); // Create the password reset command
        await client.send(command); // Send the request
    } catch (err) {
        console.error("Error sending reset email:", err.message);
        throw new Error("Failed to send reset email. Please try again.");
    }
}
async function confirmPasswordReset(email, code, newPassword) {
    const input = {
        ClientId: ClientId,
        Username: email,
        ConfirmationCode: code,
        Password: newPassword
    };
    try {
        const command = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$dist$2d$es$2f$commands$2f$ConfirmForgotPasswordCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConfirmForgotPasswordCommand"](input); // Create the confirm reset command
        await client.send(command); // Send the request
    } catch (error) {
        console.error("Error resetting password:", error.message);
        throw new Error("Failed to reset password. Please try again.");
    }
}
function redirectToGoogleOAuth() {
    const domain = "https://nibraspool-app.auth.us-east-1.amazoncognito.com";
    const clientId = ("TURBOPACK compile-time value", "7lj3ovlllcctnf1p113se109");
    const redirectUrl = `${window.location.origin}/auth/callback/google`;
    const responseType = "code";
    console.log(domain);
    console.log(clientId);
    // console.log(redirectUrl)
    const loginUrl = `${domain}/oauth2/authorize?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUrl}&identity_provider=Google`;
    window.location.href = loginUrl;
}
const redirectToMicrosoftOAuth = ()=>{
    const clientId = ("TURBOPACK compile-time value", "7lj3ovlllcctnf1p113se109");
    const domain = "https://nibraspool-app.auth.us-east-1.amazoncognito.com";
    const redirectUrl = `${window.location.origin}/auth/callback/microsoft`;
    const login = `${domain}/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&identity_provider=Microsoft`;
    window.location.href = login;
}; //  
 // use .split("@")[0] to get the username from email
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/auth/login/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "default": (()=>LoginForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LoginForm() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogin = async (e)=>{
        e.preventDefault();
        setError("");
        setIsSubmitting(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])(email, password);
            const tokens = res.AuthenticationResult;
            localStorage.setItem("accessToken", tokens?.AccessToken || "");
            localStorage.setItem("idToken", tokens?.IdToken || "");
            localStorage.setItem("email", email); // the user's email
            router.push("/auth/dashBoard");
        } catch (err) {
            console.error("Login error:", err);
            setError(err.message || "Login failed");
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleForgotPassword = ()=>{
        router.push("/auth/forgotPassword");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center min-h-screen bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md bg-white p-8 rounded-lg shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-center text-gray-800",
                    children: "Welcome Back"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/login/page.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-gray-600 mb-6",
                    children: "Log in with your email"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/login/page.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleLogin,
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "w-full py-3 px-4 border border-gray-300 rounded-md text-black hover:bg-gray-100 flex items-center justify-center",
                                    onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirectToMicrosoftOAuth"],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5 mr-2",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12.152 6.896c-..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/auth/login/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/auth/login/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        "Login with Microsoft"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/auth/login/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "w-full py-3 px-4 border border-gray-300 rounded-md text-black hover:bg-gray-100 flex items-center justify-center",
                                    onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirectToGoogleOAuth"],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5 mr-2",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12.48 10.92v..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/auth/login/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/auth/login/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        "Login with Google"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/auth/login/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/auth/login/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative text-center text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute inset-0 flex items-center border-t border-gray-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/login/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10 bg-white px-2 text-gray-500",
                                    children: "Or continue with"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/login/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/auth/login/page.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    className: "block text-sm font-medium text-gray-600",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/login/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "email",
                                    type: "email",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value),
                                    placeholder: "m@example.com",
                                    className: "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/login/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/auth/login/page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "password",
                                            className: "block text-sm font-medium text-gray-600",
                                            children: "Password"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/auth/login/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/auth/forgotPassword",
                                            onClick: handleForgotPassword,
                                            className: "text-sm text-indigo-600 hover:underline",
                                            children: "Forgot your password?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/auth/login/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/auth/login/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "password",
                                    type: "password",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value),
                                    placeholder: "********",
                                    className: "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/login/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/auth/login/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-sm text-center",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/login/page.tsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isSubmitting,
                            className: "w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none",
                            children: isSubmitting ? "Logging in..." : "Login"
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/login/page.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-sm",
                            children: [
                                "Don't have an account? ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/auth/signup",
                                    className: "text-indigo-600 hover:underline",
                                    children: "Sign up"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/login/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/auth/login/page.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/login/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-xs text-gray-500 mt-6",
                    children: [
                        "By clicking continue, you agree to our ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "text-indigo-600 hover:underline",
                            children: "Terms of Service"
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/login/page.tsx",
                            lineNumber: 129,
                            columnNumber: 50
                        }, this),
                        " and ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "text-indigo-600 hover:underline",
                            children: "Privacy Policy"
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/login/page.tsx",
                            lineNumber: 129,
                            columnNumber: 131
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/login/page.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/login/page.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/auth/login/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(LoginForm, "kOXAEXhKyOUS7ULqOtKxVd2cCY0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginForm;
var _c;
__turbopack_context__.k.register(_c, "LoginForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_8857b009._.js.map