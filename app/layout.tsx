import { Analytics } from "@vercel/analytics/react";
import { TheHeader } from "@/components/TheHeader";
import "./globals.css";
import type { Metadata } from "next";
import { TheFooter } from "@/components/TheFooter";
import RandomWindow from "@/components/random/RandomWindow";
// import BannerWindow from "@/components/banner/BannerWindow";
import Script from "next/script";
import GoogleTranslate from "@/components/GoogleTranslate";

export const metadata: Metadata = {
  title:
    "XXLCasinoList: Your Comprehensive Source for Casino Reviews and Insights",
  description:
    "Welcome to XXLCasinoList, your ultimate destination for comprehensive casino reviews and invaluable insights. Whether you're a seasoned gambler or just starting your casino journey, we're here to guide you through the world of online casinos. Our expert team meticulously reviews casinos, covering game variety, bonuses, payment options, security, and more. With our in-depth analysis and unbiased recommendations, you can make informed decisions and elevate your gaming experience. Explore our extensive database, stay updated with the latest trends, and embark on a rewarding casino adventure with XXLCasinoList.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Qqdm5I_A_Tr88XIgb3NPhInCB6WHFUzTVCtlZ2fLZq8"
        />
      </head>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3SEY9WEK5K" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
 
            gtag('config', 'G-3SEY9WEK5K');
          `}
        </Script>

        {/* Вставьте скрипт Customer.io прямо сюда */}
        <Script id="customerio" type="text/javascript">
          {`
            var _cio = _cio || [];
            (function() {
              var a,b,c;a=function(f){return function(){_cio.push([f].
              concat(Array.prototype.slice.call(arguments,0)))}};b=["load","identify",
              "sidentify","track","page"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
              var t = document.createElement('script'),
                  s = document.getElementsByTagName('script')[0];
              t.async = true;
              t.id    = 'cio-tracker';
              t.setAttribute('data-site-id', '9ae231a2f5fcdcac0240');
              t.src = 'https://assets.customer.io/assets/track-eu.js';
              s.parentNode.insertBefore(t, s);
            })();
          `}
        </Script>

          {/* <BannerWindow /> */}
        <RandomWindow />
        <TheHeader />
        <GoogleTranslate />
        <main>


          {children}
          <Analytics />
        </main>
        <TheFooter />
      </body>
    </html>
  );
}
