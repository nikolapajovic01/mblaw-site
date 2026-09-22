import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: "/oblasti-rada/poslovanje-i-kompanije",
        destination: "/oblasti-rada/korporativno-pravo",
        permanent: true,
      },
      {
        source: "/oblasti-rada/privredno-pravo",
        destination: "/oblasti-rada/korporativno-pravo",
        permanent: true,
      },
      {
        source: "/oblasti-rada/sporovi-naplata-i-restrukturiranje",
        destination: "/oblasti-rada/ostale-oblasti-rada",
        permanent: true,
      },
      {
        source: "/oblasti-rada/strani-klijenti-i-ulaganja",
        destination: "/oblasti-rada/prava-stranaca",
        permanent: true,
      },
      {
        source: "/oblasti-rada/privatni-klijenti",
        destination: "/oblasti-rada/gradjansko-pravo",
        permanent: true,
      },
      {
        source: "/oblasti-rada/nekretnine",
        destination: "/oblasti-rada/nepokretnosti",
        permanent: true,
      },
      {
        source: "/oblasti-rada/nekretnine-i-gradjevinarstvo",
        destination: "/oblasti-rada/nepokretnosti",
        permanent: true,
      },
      {
        source: "/oblasti-rada/ozakonjenje-i-upis-nepokretnosti",
        destination: "/oblasti-rada/nepokretnosti",
        permanent: true,
      },
      {
        source: "/oblasti-rada/kazneno-pravo",
        destination: "/oblasti-rada/krivicno-i-prekrsajno-pravo",
        permanent: true,
      },
      {
        source: "/oblasti-rada/porodicno-pravo",
        destination: "/oblasti-rada/gradjansko-pravo",
        permanent: true,
      },
      {
        source: "/oblasti-rada/nasledno-pravo",
        destination: "/oblasti-rada/gradjansko-pravo",
        permanent: true,
      },
      {
        source: "/oblasti-rada/resavanje-sporova-i-arbitraza",
        destination: "/oblasti-rada/gradjansko-pravo",
        permanent: true,
      },
      {
        source: "/oblasti-rada/javne-nabavke-koncesije-i-jpp",
        destination: "/oblasti-rada/nepokretnosti",
        permanent: true,
      },
      {
        source: "/oblasti-rada/stecaj-i-restrukturiranje",
        destination: "/oblasti-rada/korporativno-pravo",
        permanent: true,
      },
      {
        source: "/oblasti-rada/bankarsko-i-finansijsko-pravo",
        destination: "/oblasti-rada/korporativno-pravo",
        permanent: true,
      },
      {
        source: "/oblasti-rada/medicinsko-pravo",
        destination: "/oblasti-rada/ostale-oblasti-rada",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
