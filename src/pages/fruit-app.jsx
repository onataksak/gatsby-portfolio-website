import * as React from "react"
import { Link } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import { Themed } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"

const Page = () => (
    <Layout>
        <Seo title="My App" />
        <Parallax pages={1}>
            <div>
                <Divider speed={0.2} offset={0} factor={1}>
                    <UpDown>
                        <Svg icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
                        <Svg icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
                        <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
                    </UpDown>
                    <UpDownWide>
                        <Svg icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
                        <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
                        <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
                        <Svg icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
                        <Svg icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
                        <Svg icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
                        <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
                    </UpDownWide>
                    <Svg icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
                    <Svg icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
                    <Svg icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
                    <Svg icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
                    <Svg icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
                    <Svg icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
                    <Svg icon="circle" width={64} color="icon_green" left="95%" top="5%" />
                    <Svg icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
                    <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
                    <Svg icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
                    <Svg icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
                    <Svg icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
                </Divider>
                <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0} factor={1}>
                    <Inner>
                        <Themed.h1>Fruit Ninja</Themed.h1>

                        <Themed.p>
                            Meyveleri dilimleyin, bombayı değil - Fruit Ninja aksiyonuna başlamanız için bilmeniz gereken tek
                            şey bu! Klasik modda ne kadar uzun süre dayanabileceğinizi görmek için kendinize meydan
                            okuyun, Arcade modda bir rekor kırın veya Zen modda meyve dilimleme becerilerinizin
                            antrenmanını yapın. Geniş bıçak yelpazesi ve dövüş okulları kesme işinde sizi zirveye taşımak için
                            emrinize amadedir.
                        </Themed.p>
                        <Themed.p>
                            Slice the fruit, not the bomb - that's all you need to know to start the Fruit Ninja action! Challenge
                            yourself to see how long you can last in Classic mode, break a record in Arcade mode or train
                            your fruit slicing skills in Zen mode. A wide range of knives and martial arts are at your disposal to
                            take you to the top of the cutting business.
                        </Themed.p>

                        <Themed.h3>App Screenshots</Themed.h3>

                        <Themed.p>
                            <Themed.img src="/images/fruit1.png" height={250} ></Themed.img>
                            <Themed.img src="/images/fruit2.png" height={250} ></Themed.img>
                            <Themed.img src="/images/fruit3.png" height={250} ></Themed.img>
                            <Themed.img src="/images/fruit4.png" height={250} ></Themed.img>
                            <Themed.img src="/images/fruit5.png" height={250} ></Themed.img>
                        </Themed.p>


                        <Themed.p>Go back to <Link to="/">homepage</Link>.</Themed.p>
                    </Inner>
                </Content>
            </div>
        </Parallax>
    </Layout>
)

export default Page
