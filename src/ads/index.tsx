import { Container } from "semantic-ui-react";

export const Ads = () => {
  return (
    <Container textAlign="center" style={{ marginTop: 20 }}>
      <iframe
        title="a-ads"
        data-aa="2270484"
        src="//ad.a-ads.com/2270484?size=728x90"
        style={{
          width: "728px",
          height: "90px",
          border: "0px",
          padding: 0,
          overflow: "hidden",
          backgroundColor: "transparent",
        }}
      ></iframe>
    </Container>
  );
};

export const VerticalAds = () => {
  return (
    <Container textAlign="center" style={{ marginTop: 90 }}>
      <iframe
        title="a-ads"
        data-aa="2271213"
        src="//ad.a-ads.com/2271213?size=160x600"
        style={{
          width: "160px",
          height: "600px",
          border: "0px",
          padding: 0,
          overflow: "hidden",
          backgroundColor: "transparent",
        }}
      ></iframe>
    </Container>
  );
};
