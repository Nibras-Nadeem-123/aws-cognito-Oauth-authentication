module.exports = {

"[externals]/child_process [external] (child_process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getValidatedProcessCredentials": (()=>getValidatedProcessCredentials)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$client$2f$setCredentialFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js [app-ssr] (ecmascript)");
;
const getValidatedProcessCredentials = (profileName, data, profiles)=>{
    if (data.Version !== 1) {
        throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
    }
    if (data.AccessKeyId === undefined || data.SecretAccessKey === undefined) {
        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
    }
    if (data.Expiration) {
        const currentTime = new Date();
        const expireTime = new Date(data.Expiration);
        if (expireTime < currentTime) {
            throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
        }
    }
    let accountId = data.AccountId;
    if (!accountId && profiles?.[profileName]?.aws_account_id) {
        accountId = profiles[profileName].aws_account_id;
    }
    const credentials = {
        accessKeyId: data.AccessKeyId,
        secretAccessKey: data.SecretAccessKey,
        ...data.SessionToken && {
            sessionToken: data.SessionToken
        },
        ...data.Expiration && {
            expiration: new Date(data.Expiration)
        },
        ...data.CredentialScope && {
            credentialScope: data.CredentialScope
        },
        ...accountId && {
            accountId
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$client$2f$setCredentialFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCredentialFeature"])(credentials, "CREDENTIALS_PROCESS", "w");
    return credentials;
};
}}),
"[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resolveProcessCredentials": (()=>resolveProcessCredentials)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$smithy$2f$property$2d$provider$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@smithy/property-provider/dist-es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$smithy$2f$property$2d$provider$2f$dist$2d$es$2f$CredentialsProviderError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/child_process [external] (child_process, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$process$2f$dist$2d$es$2f$getValidatedProcessCredentials$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js [app-ssr] (ecmascript)");
;
;
;
;
const resolveProcessCredentials = async (profileName, profiles, logger)=>{
    const profile = profiles[profileName];
    if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== undefined) {
            const execPromise = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["exec"]);
            try {
                const { stdout } = await execPromise(credentialProcess);
                let data;
                try {
                    data = JSON.parse(stdout.trim());
                } catch  {
                    throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$process$2f$dist$2d$es$2f$getValidatedProcessCredentials$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValidatedProcessCredentials"])(profileName, data, profiles);
            } catch (error) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$smithy$2f$property$2d$provider$2f$dist$2d$es$2f$CredentialsProviderError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CredentialsProviderError"](error.message, {
                    logger
                });
            }
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$smithy$2f$property$2d$provider$2f$dist$2d$es$2f$CredentialsProviderError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CredentialsProviderError"](`Profile ${profileName} did not contain credential_process.`, {
                logger
            });
        }
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$smithy$2f$property$2d$provider$2f$dist$2d$es$2f$CredentialsProviderError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CredentialsProviderError"](`Profile ${profileName} could not be found in shared credentials file.`, {
            logger
        });
    }
};
}}),
"[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fromProcess": (()=>fromProcess)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$smithy$2f$shared$2d$ini$2d$file$2d$loader$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@smithy/shared-ini-file-loader/dist-es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$smithy$2f$shared$2d$ini$2d$file$2d$loader$2f$dist$2d$es$2f$getProfileName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@smithy/shared-ini-file-loader/dist-es/getProfileName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$smithy$2f$shared$2d$ini$2d$file$2d$loader$2f$dist$2d$es$2f$parseKnownFiles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@smithy/shared-ini-file-loader/dist-es/parseKnownFiles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$process$2f$dist$2d$es$2f$resolveProcessCredentials$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js [app-ssr] (ecmascript)");
;
;
const fromProcess = (init = {})=>async ({ callerClientConfig } = {})=>{
        init.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
        const profiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$smithy$2f$shared$2d$ini$2d$file$2d$loader$2f$dist$2d$es$2f$parseKnownFiles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseKnownFiles"])(init);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$process$2f$dist$2d$es$2f$resolveProcessCredentials$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveProcessCredentials"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$smithy$2f$shared$2d$ini$2d$file$2d$loader$2f$dist$2d$es$2f$getProfileName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProfileName"])({
            profile: init.profile ?? callerClientConfig?.profile
        }), profiles, init.logger);
    };
}}),
"[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-process/dist-es/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$process$2f$dist$2d$es$2f$fromProcess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js [app-ssr] (ecmascript)");
;
}}),
"[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-process/dist-es/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$process$2f$dist$2d$es$2f$fromProcess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$process$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-process/dist-es/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-process/dist-es/index.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fromProcess": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$process$2f$dist$2d$es$2f$fromProcess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromProcess"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$process$2f$dist$2d$es$2f$fromProcess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$process$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-process/dist-es/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-process/dist-es/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fromProcess": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$process$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["fromProcess"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$process$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-process/dist-es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2d$provider$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$process$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/client-cognito-identity-provider/node_modules/@aws-sdk/credential-provider-process/dist-es/index.js [app-ssr] (ecmascript) <exports>");
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__790412f0._.js.map