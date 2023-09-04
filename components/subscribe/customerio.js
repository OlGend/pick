import { CustomerIO } from "customerio-node";


const customerioApiKey = process.env.CUSTOMERIO_API_KEY;
const customerioSiteId = process.env.CUSTOMERIO_SITE_ID;



// Создайте экземпляр клиента только на клиентской стороне
let customerio = null;

if (typeof window !== "undefined") {
  customerio = new CustomerIO({
    apiKey: customerioApiKey,
    siteId: customerioSiteId,
  });
}

export default customerio;
