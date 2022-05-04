import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Grid, Link, Text } from "@nextui-org/react";

const rna: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RNA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue500 -20%, $pink500 50%",
          }}
          weight="bold"
        >
          RNA
        </Text>
        <Grid.Container justify="center">
          <Grid xs={4}>
            <Text>
              <Text small size={30}>
                RNA is short for ribonucleic acid. It is composed of four
                nucleic acids,{" "}
              </Text>
              <Text
                small
                size={30}
                css={{
                  textGradient: "45deg, $red500, $pink500 90%",
                }}
                weight="bold"
              >
                Adenine
              </Text>
              <Text small size={30}>
                {", "}
              </Text>
              <Text
                small
                size={30}
                css={{
                  textGradient: "45deg, $red500, $yellow500 90%",
                }}
                weight="bold"
              >
                Uracil
              </Text>
              <Text small size={30}>
                {", "}
              </Text>
              <Text
                small
                size={30}
                css={{
                  textGradient: "45deg, $green500, $blue500 90%",
                }}
                weight="bold"
              >
                Cytosine
              </Text>
              <Text small size={30}>
                {", "}
              </Text>
              <Text
                small
                size={30}
                css={{
                  textGradient: "45deg, $blue500 -20%, $pink500 50%",
                }}
                weight="bold"
              >
                Guanine
              </Text>
              <Text small size={30}>
                . Adenine pairs with Uracil, and Cytosine pairs with Guanine.
                The three different types of RNA are messenger RNA or mRNA,
                ribosomal RNA or rRNA, and transfer RNA or tRNA.{" "}
                <Text
                  small
                  size={30}
                  css={{
                    textGradient: "45deg, $yellow500, $red500 90%",
                  }}
                  weight="bold"
                >
                  Messenger RNA{" "}
                </Text>
                is responsible for directing amino acid sequences of proteins,{" "}
                <Text
                  small
                  size={30}
                  css={{
                    textGradient: "45deg, $green500, $pink500 90%",
                  }}
                  weight="bold"
                >
                  Ribosomal RNA{" "}
                </Text>{" "}
                is responsible for combining proteins to form ribosomes, and{" "}
                <Text
                  small
                  size={30}
                  css={{
                    textGradient: "45deg, $pink500, $red500 90%",
                  }}
                  weight="bold"
                >
                  Transfer RNA{" "}
                </Text>{" "}
                is responsible for transporting amino acids to the site of
                protein synthesis. RNA is the functional form of nucleic acids
                that the body utilizes to make important functions like
                constructing cells or making immune responses.
              </Text>
            </Text>
          </Grid>
          <Grid xs={4}>
            <ul>
              <Text
                small
                size={35}
                css={{
                  textGradient: "45deg, $green500, $pink500 90%",
                }}
                weight="bold"
              >
                RNA Facts
              </Text>
              <li>
                <Text size={25}>
                  RNA is widely used in gene therapy to treat certain types of
                  cancers.
                </Text>
              </li>
              <li>
                <Text size={25}>
                  About five percent of the total weight of a human consists of
                  RNA. Comparatively, only one percent is DNA.
                </Text>
              </li>
              <li>
                <Text size={25}>
                  Advancements in RNA technology have been used to suppress
                  fruit-ripening, allowing for fruits to last longer on their
                  vines to extend growing seasons.
                </Text>
              </li>
              <li>
                <Text size={25}>
                  Cas9, which is a type of RNA, is used to target genes for gene
                  therapy in order to split DNA and make changes.
                </Text>
              </li>
            </ul>
          </Grid>
        </Grid.Container>
        <img height={600} src={"/assets/rnacodontable.png"} />
        <img height={600} src={"/assets/rnastrand.png"} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/jordanhilado/AminoAcidDetection"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Jordan Hilado and Shaan Obney
        </a>
      </footer>
    </div>
  );
};

export default rna;
