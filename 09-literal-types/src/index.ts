let autoComplete: "on" | "off" = "on";
autoComplete = "off";
autoComplete = "ON";

// ============================================================

type NumberBase = 2 | 8 | 10 | 16;
let base: NumberBase;
base = 2;
base = 3;

// ============================================================

let autoFocus: true = true;
autoFocus = false;

// ============================================================

enum Protocols {
    HTTP,
    HTTPS,
    FTP
}

type HyperTextProtocol = Protocols.HTTP | Protocols.HTTPS;

let protocol: HyperTextProtocol;
protocol = Protocols.HTTP;
protocol = Protocols.HTTPS;
protocol = Protocols.FTP;
