type Result<T> =
    | { success: true; value: T }
    | { success: false; error: string };

function tryParseInt(text: string): Result<number> {
    if (/^-?\d+$/.test(text)) {
        return {
            success: true,
            value: parseInt(text, 10)
        };
    }
    return {
        success: false,
        error: "Invalid number format"
    };
}

const result = tryParseInt("42");

if (result.success) {
    result;
} else {
    result;
}

// ============================================================

interface Cash {
    kind: "cash";
}

interface PayPal {
    kind: "paypal";
    email: string;
}

interface CreditCard {
    kind: "creditcard";
    cardNumber: string;
    securityCode: string;
}

type PaymentMethod = Cash | PayPal | CreditCard;

function stringifyPaymentMethod(method: PaymentMethod): string {
    switch (method.kind) {
        case "cash":
            return "Cash";
        case "paypal":
            return `PayPal (${method.email})`;
        case "creditcard":
            return "Credit Card";
    }
}
