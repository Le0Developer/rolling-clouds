
const links = [
	"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
	"https://www.youtube.com/watch?v=6_b7RDuLwcI&t=11s",
	"https://www.youtube.com/watch?v=34Ig3X59_qA",
	"https://www.youtube.com/watch?v=DLzxrzFCyOs",
	"https://www.youtube.com/watch?v=TfAMNOaZaAE",
	"https://www.youtube.com/watch?v=bxqLsrlakK8",
	"https://www.youtube.com/watch?v=MO7bRMa9bmA&t=36s",
	"https://www.youtube.com/watch?v=nrsnN23tmUA",
	"https://www.youtube.com/watch?v=j8PxqgliIno",
	"https://www.youtube.com/watch?v=AACOcpA8i-U",
	"https://www.youtube.com/watch?v=bIwVIx5pp88",
	"https://www.youtube.com/watch?v=HnfkEVtetuE",
	"https://www.youtube.com/watch?v=QB7ACr7pUuE",
	"https://www.youtube.com/watch?v=mrThFRR3n8A",
	"https://www.youtube.com/watch?v=MCjlo7PtXMQ",
	"https://www.youtube.com/watch?v=a6pbjksYUHY",
	"https://www.youtube.com/watch?v=ll-mQPDCn-U",
	"https://www.youtube.com/watch?v=dRV6NaciZVk",
	"https://www.youtube.com/watch?v=LWErcuHm_C4",
	"https://www.youtube.com/watch?v=-pHhb4biR9k",
	"https://www.youtube.com/watch?v=sSSOG8g7PFg",
	"https://www.youtube.com/watch?v=oHg5SJYRHA0",
]

const DISCORD_EMBED_UA = "Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)";
const DISCORD_IMAGE_PROXY_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 11.6; rv:92.0) Gecko/20100101 Firefox/92.0";

// tried to put this into base64, failed.
// this is for giving the discord embed process a valid image
// that nobody actually will ever see because we block the image proxy
// that all following requests go through
const PLACEHOLDER_IMAGE = "ffd8ffe000104a46494600010100004800480000ffe100404578696600004d4d002a00000008000187690004000000010000001a000000000002a00200040000000100000064a0030004000000010000006400000000ffed003850686f746f73686f7020332e30003842494d04040000000000003842494d0425000000000010d41d8cd98f00b204e9800998ecf8427effe207e84943435f50524f46494c45000101000007d86170706c022000006d6e74725247422058595a2007d900020019000b001a000b616373704150504c000000006170706c000000000000000000000000000000000000f6d6000100000000d32d6170706c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b64657363000001080000006f6473636d000001780000059c637072740000071400000038777470740000074c000000147258595a00000760000000146758595a00000774000000146258595a0000078800000014725452430000079c0000000e63686164000007ac0000002c625452430000079c0000000e675452430000079c0000000e64657363000000000000001447656e65726963205247422050726f66696c6500000000000000000000001447656e65726963205247422050726f66696c6500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006d6c7563000000000000001f0000000c736b534b00000028000001846461444b0000002e000001ac6361455300000024000001da7669564e00000024000001fe707442520000002600000222756b55410000002a0000024866724655000000280000027268754855000000280000029a7a68545700000016000002c26e624e4f00000026000002d86373435a00000022000002fe6865494c0000001e0000032069744954000000280000033e726f524f0000002400000366646544450000002c0000038a6b6f4b5200000016000003b67376534500000026000002d87a68434e00000016000003cc6a614a500000001a000003e2656c475200000022000003fc7074504f000000260000041e6e6c4e4c000000280000044465734553000000260000041e74685448000000240000046c7472545200000022000004906669464900000028000004b26872485200000028000004da706c504c0000002c0000050272755255000000220000052e617245470000002600000550656e55530000002600000576005601610065006f006200650063006e00fd0020005200470042002000700072006f00660069006c00470065006e006500720065006c0020005200470042002d006200650073006b0072006900760065006c0073006500500065007200660069006c0020005200470042002000670065006e00e800720069006300431ea500750020006800ec006e006800200052004700420020004300680075006e006700500065007200660069006c0020005200470042002000470065006e00e9007200690063006f0417043004330430043b044c043d043804390020043f0440043e044404300439043b002000520047004200500072006f00660069006c0020006700e9006e00e900720069007100750065002000520056004200c1006c00740061006c00e1006e006f00730020005200470042002000700072006f00660069006c901a75280020005200470042002082725f6963cf8ff000470065006e0065007200690073006b0020005200470042002d00700072006f00660069006c004f006200650063006e00fd0020005200470042002000700072006f00660069006c05e405e805d505e405d905dc0020005200470042002005db05dc05dc05d900500072006f00660069006c006f0020005200470042002000670065006e0065007200690063006f00500072006f00660069006c0020005200470042002000670065006e00650072006900630041006c006c00670065006d00650069006e006500730020005200470042002d00500072006f00660069006cc77cbc1800200052004700420020d504b85cd30cc77c666e901a0020005200470042002063cf8ff065874ef64e00822c0020005200470042002030d730ed30d530a130a430eb039303b503bd03b903ba03cc002003c003c103bf03c603af03bb002000520047004200500065007200660069006c0020005200470042002000670065006e00e9007200690063006f0041006c00670065006d00650065006e0020005200470042002d00700072006f006600690065006c0e420e1b0e230e440e1f0e250e4c002000520047004200200e170e310e480e270e440e1b00470065006e0065006c0020005200470042002000500072006f00660069006c00690059006c00650069006e0065006e0020005200470042002d00700072006f006600690069006c006900470065006e006500720069010d006b00690020005200470042002000700072006f00660069006c0055006e006900770065007200730061006c006e0079002000700072006f00660069006c0020005200470042041e04310449043804390020043f0440043e04440438043b044c00200052004700420645064406410020062a06390631064a0641002000520047004200200627064406390627064500470065006e00650072006900630020005200470042002000500072006f00660069006c00657465787400000000436f707972696768742032303037204170706c6520496e632e2c20616c6c207269676874732072657365727665642e0058595a20000000000000f35200010000000116cf58595a20000000000000744d00003dee000003d058595a200000000000005a750000ac730000173458595a20000000000000281a0000159f0000b83663757276000000000000000101cd0000736633320000000000010c42000005defffff326000007920000fd91fffffba2fffffda3000003dc0000c06cffc00011080064006403012200021101031101ffc4001f0000010501010101010100000000000000000102030405060708090a0bffc400b5100002010303020403050504040000017d01020300041105122131410613516107227114328191a1082342b1c11552d1f02433627282090a161718191a25262728292a3435363738393a434445464748494a535455565758595a636465666768696a737475767778797a838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae1e2e3e4e5e6e7e8e9eaf1f2f3f4f5f6f7f8f9faffc4001f0100030101010101010101010000000000000102030405060708090a0bffc400b51100020102040403040705040400010277000102031104052131061241510761711322328108144291a1b1c109233352f0156272d10a162434e125f11718191a262728292a35363738393a434445464748494a535455565758595a636465666768696a737475767778797a82838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae2e3e4e5e6e7e8e9eaf2f3f4f5f6f7f8f9faffdb004300020202020202030202030403030304050404040405070505050505070807070707070708080808080808080a0a0a0a0a0a0b0b0b0b0b0d0d0d0d0d0d0d0d0d0dffdb004301020202030303060303060d0907090d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0dffdd00040007ffda000c03010002110311003f00fe7fe8a28a0028a28a0028a28a0028a28a0028a28a0028a28a0028a28a00ffd0fe7fe8a28a0028a28a0028a28a0028a28a0028a28a0028a28a0028a28a00ffd1fe7fe8a28a0028a28a0028a28a0028a28a0028a28a0028a28a0028a28a00ffd2fe7fe8a28a0028a28a0028a28a0028a28a0028a28a0028a28a0028a28a00ffd3fe7fe8a28a0028a28a0028a28a0028a28a0028a28a0028a28a0028a28a00ffd4fe7fe8a28a0028a28a0028a28a0028a28a0028a28a0028a28a0028a28a00ffd5fe7fe8a28a0028a28a0028a28a0028a28a0028a28a0028a28a0028a28a00ffd9c3bfc398c3bfc3a000104a46494600010100004800480000c3bfc3a100404578696600004d4d002a000000080001c287690004000000010000001a000000000002c2a00200040000000100000064c2a0030004000000010000006400000000c3bfc3ad003850686f746f73686f7020332e30003842494d04040000000000003842494d0425000000000010c3941dc28cc399c28f00c2b204c3a9c28009c298c3acc3b8427ec3bfc3a207c3a84943435f50524f46494c45000101000007c3986170706c022000006d6e74725247422058595a2007c39900020019000b001a000b616373704150504c000000006170706c000000000000000000000000000000000000c3b6c396000100000000c3932d6170706c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b64657363000001080000006f6473636d00000178000005c29c637072740000071400000038777470740000074c000000147258595a00000760000000146758595a00000774000000146258595a000007c2880000001472545243000007c29c0000000e63686164000007c2ac0000002c62545243000007c29c0000000e67545243000007c29c0000000e64657363000000000000001447656e65726963205247422050726f66696c6500000000000000000000001447656e65726963205247422050726f66696c6500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006d6c7563000000000000001f0000000c736b534b00000028000001c2846461444b0000002e000001c2ac6361455300000024000001c39a7669564e00000024000001c3be707442520000002600000222756b55410000002a000002486672465500000028000002726875485500000028000002c29a7a68545700000016000002c3826e624e4f00000026000002c3986373435a00000022000002c3be6865494c0000001e0000032069744954000000280000033e726f524f0000002400000366646544450000002c000003c28a6b6f4b5200000016000003c2b67376534500000026000002c3987a68434e00000016000003c38c6a614a500000001a000003c3a2656c475200000022000003c3bc7074504f000000260000041e6e6c4e4c000000280000044465734553000000260000041e74685448000000240000046c7472545200000022000004c2906669464900000028000004c2b26872485200000028000004c39a706c504c0000002c0000050272755255000000220000052e617245470000002600000550656e55530000002600000576005601610065006f006200650063006e00c3bd0020005200470042002000700072006f00660069006c00470065006e006500720065006c0020005200470042002d006200650073006b0072006900760065006c0073006500500065007200660069006c0020005200470042002000670065006e00c3a800720069006300431ec2a500750020006800c3ac006e006800200052004700420020004300680075006e006700500065007200660069006c0020005200470042002000470065006e00c3a9007200690063006f0417043004330430043b044c043d043804390020043f0440043e044404300439043b002000520047004200500072006f00660069006c0020006700c3a9006e00c3a900720069007100750065002000520056004200c381006c00740061006c00c3a1006e006f00730020005200470042002000700072006f00660069006cc2901a752800200052004700420020c282725f6963c38fc28fc3b000470065006e0065007200690073006b0020005200470042002d00700072006f00660069006c004f006200650063006e00c3bd0020005200470042002000700072006f00660069006c05c3a405c3a805c39505c3a405c39905c39c0020005200470042002005c39b05c39c05c39c05c39900500072006f00660069006c006f0020005200470042002000670065006e0065007200690063006f00500072006f00660069006c0020005200470042002000670065006e00650072006900630041006c006c00670065006d00650069006e006500730020005200470042002d00500072006f00660069006cc3877cc2bc1800200052004700420020c39504c2b85cc3930cc3877c666ec2901a0020005200470042002063c38fc28fc3b065c2874ec3b64e00c2822c0020005200470042002030c39730c3ad30c39530c2a130c2a430c3ab03c29303c2b503c2bd03c2b903c2ba03c38c002003c38003c38103c2bf03c38603c2af03c2bb002000520047004200500065007200660069006c0020005200470042002000670065006e00c3a9007200690063006f0041006c00670065006d00650065006e0020005200470042002d00700072006f006600690065006c0e420e1b0e230e440e1f0e250e4c002000520047004200200e170e310e480e270e440e1b00470065006e0065006c0020005200470042002000500072006f00660069006c00690059006c00650069006e0065006e0020005200470042002d00700072006f006600690069006c006900470065006e006500720069010d006b00690020005200470042002000700072006f00660069006c0055006e006900770065007200730061006c006e0079002000700072006f00660069006c0020005200470042041e04310449043804390020043f0440043e04440438043b044c00200052004700420645064406410020062a06390631064a0641002000520047004200200627064406390627064500470065006e00650072006900630020005200470042002000500072006f00660069006c00657465787400000000436f707972696768742032303037204170706c6520496e632e2c20616c6c207269676874732072657365727665642e0058595a20000000000000c3b35200010000000116c38f58595a20000000000000744d00003dc3ae000003c39058595a200000000000005a750000c2ac730000173458595a20000000000000281a000015c29f0000c2b83663757276000000000000000101c38d0000736633320000000000010c42000005c39ec3bfc3bfc3b326000007c2920000c3bdc291c3bfc3bfc3bbc2a2c3bfc3bfc3bdc2a3000003c39c0000c3806cc3bfc3800011080064006403012200021101031101c3bfc384001f0000010501010101010100000000000000000102030405060708090a0bc3bfc38400c2b5100002010303020403050504040000017d0102030004110512213141061351610722711432c281c291c2a1082342c2b1c3811552c391c3b024336272c282090a161718191a25262728292a3435363738393a434445464748494a535455565758595a636465666768696a737475767778797ac283c284c285c286c287c288c289c28ac292c293c294c295c296c297c298c299c29ac2a2c2a3c2a4c2a5c2a6c2a7c2a8c2a9c2aac2b2c2b3c2b4c2b5c2b6c2b7c2b8c2b9c2bac382c383c384c385c386c387c388c389c38ac392c393c394c395c396c397c398c399c39ac3a1c3a2c3a3c3a4c3a5c3a6c3a7c3a8c3a9c3aac3b1c3b2c3b3c3b4c3b5c3b6c3b7c3b8c3b9c3bac3bfc384001f0100030101010101010101010000000000000102030405060708090a0bc3bfc38400c2b5110002010204040304070504040001027700010203110405213106124151076171132232c281081442c291c2a1c2b1c38109233352c3b0156272c3910a162434c3a125c3b11718191a262728292a35363738393a434445464748494a535455565758595a636465666768696a737475767778797ac282c283c284c285c286c287c288c289c28ac292c293c294c295c296c297c298c299c29ac2a2c2a3c2a4c2a5c2a6c2a7c2a8c2a9c2aac2b2c2b3c2b4c2b5c2b6c2b7c2b8c2b9c2bac382c383c384c385c386c387c388c389c38ac392c393c394c395c396c397c398c399c39ac3a2c3a3c3a4c3a5c3a6c3a7c3a8c3a9c3aac3b2c3b3c3b4c3b5c3b6c3b7c3b8c3b9c3bac3bfc39b004300020202020202030202030403030304050404040405070505050505070807070707070708080808080808080a0a0a0a0a0a0b0b0b0b0b0d0d0d0d0d0d0d0d0d0dc3bfc39b004301020202030303060303060d0907090d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0dc3bfc39d00040007c3bfc39a000c03010002110311003f00c3be7fc3a8c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a00c3bfc390c3be7fc3a8c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a00c3bfc391c3be7fc3a8c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a00c3bfc392c3be7fc3a8c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a00c3bfc393c3be7fc3a8c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a00c3bfc394c3be7fc3a8c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a00c3bfc395c3be7fc3a8c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a0028c2a2c28a00c3bfc399";
const fromHexString = (hexString: string): Uint8Array => Uint8Array.from((hexString.match(/.{1,2}/g) ?? []).map((byte) => parseInt(byte, 16)));

export interface Env {}

async function handleRequest(request: Request): Promise<Response> {
	const imageType = ["jpg", "jpeg", "png", "webp", "gif", "avif"].find(ext => request.url.includes(ext));
	const userAgent = request.headers.get("user-agent");
	if(userAgent === DISCORD_EMBED_UA && imageType) {
		// discord embedder but its an image url
		// return a fake image, so an image is embedded
		// because image embedder is blocked, this will result in a never loading image
		return new Response(fromHexString(PLACEHOLDER_IMAGE).buffer, {
			headers: {
				"content-type": `image/${imageType}`
			}
		})
	}
	if([DISCORD_EMBED_UA, DISCORD_IMAGE_PROXY_UA].includes(userAgent ?? "") || request.url === "/favicon.ico") {
		return new Response("Not Found", { status: 404 });
	}
	const randomLink = links[Math.floor(Math.random() * links.length)];
	return new Response("", {
		status: 307,
		headers: {
			location: randomLink
		}
	})
}

export async function onRequest({ request }: { request: Request }): Promise<Response> {
	try {
		return await handleRequest(request);
	} catch (e: any) {
		return new Response(e.stack);
	}
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		return await handleRequest(request);
	},
};
