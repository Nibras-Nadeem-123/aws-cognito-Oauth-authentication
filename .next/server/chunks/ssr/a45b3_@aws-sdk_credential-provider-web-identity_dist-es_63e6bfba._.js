module.exports = {

"[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fromWebToken": (()=>fromWebToken)
});
const fromWebToken = (init)=>async (awsIdentityProperties)=>{
        init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
        const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds } = init;
        let { roleAssumerWithWebIdentity } = init;
        if (!roleAssumerWithWebIdentity) {
            const { getDefaultRoleAssumerWithWebIdentity } = await __turbopack_context__.r("[project]/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/index.js [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
            roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity({
                ...init.clientConfig,
                credentialProviderLogger: init.logger,
                parentClientConfig: {
                    ...awsIdentityProperties?.callerClientConfig,
                    ...init.parentClientConfig
                }
            }, init.clientPlugins);
        }
        return roleAssumerWithWebIdentity({
            RoleArn: roleArn,
            RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
            WebIdentityToken: webIdentityToken,
            ProviderId: providerId,
            PolicyArns: policyArns,
            Policy: policy,
            DurationSeconds: durationSeconds
        });
    };
}}),
"[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fromTokenFile": (()=>fromTokenFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$client$2f$setCredentialFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$smithy$2f$property$2d$provider$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@smithy/property-provider/dist-es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$smithy$2f$property$2d$provider$2f$dist$2d$es$2f$CredentialsProviderError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$web$2d$identity$2f$dist$2d$es$2f$fromWebToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js [app-ssr] (ecmascript)");
;
;
;
;
const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
const fromTokenFile = (init = {})=>async ()=>{
        init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
        const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
        const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
        const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
        if (!webIdentityTokenFile || !roleArn) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$smithy$2f$property$2d$provider$2f$dist$2d$es$2f$CredentialsProviderError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CredentialsProviderError"]("Web identity configuration not specified", {
                logger: init.logger
            });
        }
        const credentials = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$web$2d$identity$2f$dist$2d$es$2f$fromWebToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromWebToken"])({
            ...init,
            webIdentityToken: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["readFileSync"])(webIdentityTokenFile, {
                encoding: "ascii"
            }),
            roleArn,
            roleSessionName
        })();
        if (webIdentityTokenFile === process.env[ENV_TOKEN_FILE]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$client$2f$setCredentialFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCredentialFeature"])(credentials, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
        }
        return credentials;
    };
}}),
"[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$web$2d$identity$2f$dist$2d$es$2f$fromTokenFile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$web$2d$identity$2f$dist$2d$es$2f$fromWebToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js [app-ssr] (ecmascript)");
;
;
}}),
"[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$web$2d$identity$2f$dist$2d$es$2f$fromTokenFile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$web$2d$identity$2f$dist$2d$es$2f$fromWebToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$web$2d$identity$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fromTokenFile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$web$2d$identity$2f$dist$2d$es$2f$fromTokenFile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromTokenFile"]),
    "fromWebToken": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$web$2d$identity$2f$dist$2d$es$2f$fromWebToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromWebToken"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$web$2d$identity$2f$dist$2d$es$2f$fromTokenFile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$web$2d$identity$2f$dist$2d$es$2f$fromWebToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$web$2d$identity$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fromTokenFile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$web$2d$identity$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["fromTokenFile"]),
    "fromWebToken": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$web$2d$identity$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["fromWebToken"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$web$2d$identity$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$web$2d$identity$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js [app-ssr] (ecmascript) <exports>");
}}),

};

//# sourceMappingURL=a45b3_%40aws-sdk_credential-provider-web-identity_dist-es_63e6bfba._.js.map