module.exports = {
	// Required parameters for OpenID
	REQUIRED_PARAMS: [
		'openid.assoc_handle',
		'openid.signed',
		'openid.sig'
	],
	// Params we want to verify are signed
	REQUIRED_SIGNED_PARAMS: [
		'claimed_id', // The user's SteamID. If not signed, the SteamID could be spoofed.
		'return_to', // The return URL. If not signed, a login from another (malicious) site could be used.
		'response_nonce' // The response nonce. If not signed, a successful login could be reused.
	],
	ALLOWED_PARAMS: [
		'openid.ns',
		'openid.mode',
		'openid.op_endpoint',
		'openid.claimed_id',
		'openid.identity',
		'openid.return_to',
		'openid.response_nonce',
		'openid.assoc_handle',
		'openid.signed',
		'openid.sig'
	]
};