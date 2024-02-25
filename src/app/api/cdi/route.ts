import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get(
      "https://www2.cetip.com.br/ConsultarTaxaDi/ConsultarTaxaDICetip.aspx",
    );
    const numberValue = Number(response.data.taxa.replace(",", "."));

    return NextResponse.json(numberValue / 100);
  } catch (error) {
    console.error("Error fetching Di:", error);
    return NextResponse.json({ error: "An error occurred" });
  }
}
