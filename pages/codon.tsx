import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button, Grid, Link, Text, Spacer, Image } from "@nextui-org/react";

const codon: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codon Table</title>
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
          Codons
        </Text>
        <Grid.Container justify="center">
          <Grid xs={4}>
            <Text size={30}>
              <Spacer y={1} />A codon is a sequence of three nucleotides which
              together form a unit of genetic code in a DNA or RNA molecule. The
              standard genetic code is traditionally represented as an RNA codon
              table, because when proteins are made in a cell by ribosomes, it
              is messenger RNA (mRNA) that directs protein synthesis. A single
              amino acid may be coded for by more than one codon. Although most
              organisms use the standard code, they may have their own
              preferences in terms of choosing which codons to use. For example,
              baking yeasts prefer using UGU for Cysteine. In contrast, in human
              cells, we prefer UGC.
            </Text>
          </Grid>
          <Grid xs={4}>
            <ul>
              <Text
                small
                size={35}
                css={{
                  textGradient: "45deg, $green500, $blue500 90%",
                }}
                weight="bold"
              >
                Three features of codons:
              </Text>
              <li>
                <Text size={25}>
                  There are 64 different codons in the genetic code, and most
                  codons specify an amino acid.
                </Text>
              </li>
              <li>
                <Text size={25}>
                  One “Start” codon (AUG) marks the beginning of a protein. AUG
                  encodes the amino acid, called Methionine.
                </Text>
              </li>
              <li>
                <Text size={25}>
                  Three “Stop” codons (UAG, UGA, and UAA) mark the end of a
                  protein and terminate the translation. These do not code for
                  an amino acid.
                </Text>
              </li>
            </ul>
          </Grid>
        </Grid.Container>
        <img height={600} src={"/assets/rnacodontable.png"} />
        <img height={500} src={"/assets/codontable2.png"} />
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

export default codon;
