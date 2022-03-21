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
                        <Themed.h1>Kenny App</Themed.h1>

                        <Themed.p>
                            Catch The Kenny oyunu ile South Park karakteri Kenny'i yakalamaya çalışın.
                            3 farklı zorlukta refleks oyunu oynayabilir ve el göz koordinasyonunuzu
                            geliştirebilirsiniz. Refleks, el göz koordinasyonu ve konsantrasyon arttırıcı
                            bu basit oyun odaklanma yeteneğinizi geliştirmeyi amaçlıyor.
                            Aynı zamanda reflekslerinizi geliştirmenize yardımcı olur.
                        </Themed.p>
                        <Themed.p>
                            Catch Kenny Game catch South Park character Kenny tries to escape your hands! You can
                            play the game with 3 different difficulties and improve your hand and eye harmony. 
                            This simple game of Catch The Kenny aims to improve your ability to focus. 
                            You can choose the level that suits you with 3 different difficulty
                            levels to play with. Reflex, hand coordination and concentration enhancer.
                            
                        </Themed.p>

                        <Themed.h3>App Screenshots</Themed.h3>

                        <Themed.p>
                            <Themed.img src="/images/Kenny.png" height={250} ></Themed.img>
                            <Themed.img src="/images/Kenny2.png" height={250} ></Themed.img>
                        </Themed.p>


                        <Themed.p>Go back to <Link to="/">homepage</Link>.</Themed.p>
                    </Inner>
                </Content>
            </div>
        </Parallax>
    </Layout>
)

export default Page
