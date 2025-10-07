import HomeIcon from "@mui/icons-material/Home";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaidIcon from "@mui/icons-material/Paid";

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value);
}

export function parseCurrencyInput(rawValue: string): number {
  const numericString = rawValue.replace(/\D/g, "");
  const parsed = parseFloat(numericString) / 100 || 0;
  return parsed;
}

export const items = [
  { icon: HomeIcon, label: "Início", href: "/" },
  { icon: CurrencyExchangeIcon, label: "Transferências", href: "/statements" },
  { icon: PaidIcon, label: "Investimentos", href: "" },
  { icon: AccountBalanceIcon, label: "Outros serviços", href: "" },
];

export async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
