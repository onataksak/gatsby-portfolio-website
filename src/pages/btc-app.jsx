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
                        <Themed.h1>Bitcoin App</Themed.h1>

                        <Themed.p>
                            Her 20 dakikada bir g??ncellenecek ??ekilde Dolar/TL, Euro/TL, Pound/TL, G??m????/TL, Bam/TL paritelerini ve ??nemli coinleri anl??k takip edin.
                            Men??den kullan??c??n??n profil sayfas??na, hesap detaylar??na, i??lemlerine ve d??nya genelindeki coin borsas??n?? dolar baz??nda inceleyebilirsiniz.
                            Hesap detaylar??nda kullan??c??n??n yat??rd?????? para miktar?? ve kazan??lan paraya g??re kazan?? oran??n?? g??r??nt??leyebilirsiniz. 
                            Kullan??c?? en a??a????daki butona basarak para ??ekme talebi olu??turabilir, veya bir sorun ya??ad?????? zaman y??neticiye mesaj g??nderebilir.
                            Y??netici paneli ise 3 ana bile??enden olu??ur. Kullan??c??lar, o anda kay??tl?? kullan??c??lar?? g??rmenize olanak verir. Aktivasyon durumuna g??re k??rm??z?? veya mavi renkte g??r??n??rler.
                            Ampul i??areti yan??yorsa kullan??c??n??n para ??ekme iste??i, mesaj i??areti varsa kullan??c??n??n mesaj g??ndermek istedi??ini g??sterir. Ye??il tike basarak para ??ekme i??lemini onaylayabilirsiniz.
                            Ar??iv b??l??m?? hangi i??lemlerin hangi tarihte ger??ekle??ti??ini g??sterir. Kullan??c??lar sadece davet ??zerinden kullanabildikleri i??in y??netici kullan??c??lar?? manuel eklemek durumundad??r.
                        </Themed.p>
                        <Themed.p>
                            Follow the parities of Dollar/TL, Euro/TL, GBP/TL, Silver/TL, Bam/TL and most important coins available instantly updating automatically in every 20 minutes.
                            From the Menu you can see his/her profile page, account details, actions and the Coin Market worldwide.
                            Account Details shows how much money the user deposit and the earning ratio depending on income.
                            Using the button at bottom, the user can make withdrawal request and/or send message to the admin in case of a problem.
                            The admin panel has 3 main components. Users shows you the current registered users. Depending on activation status, users may be red or blue.
                            If the bulb is on, it means the user wants to withdraw money. If the user wants to send a message you can see it with the mark. Click the green tick to approve the request.
                            Archives shows which transaction happened when. The admin has to add user manually because new users can only be added via invitation.
                            
                        </Themed.p>

                        <Themed.h3>App Screenshots</Themed.h3>

                        <Themed.p>
                            <Themed.img src="/images/btc1.jpg" height={250} ></Themed.img>
                            <Themed.img src="/images/btc2.jpg" height={250} ></Themed.img>
                            <Themed.img src="/images/btc3.jpg" height={250} ></Themed.img>
                            <Themed.img src="/images/btc4.jpg" height={250} ></Themed.img>
                            <Themed.img src="/images/btc5.jpg" height={250} ></Themed.img>
                            <Themed.img src="/images/btc6.jpg" height={250} ></Themed.img>
                            <Themed.img src="/images/btc7.jpg" height={250} ></Themed.img>
                            <Themed.img src="/images/btc8.jpg" height={250} ></Themed.img>
                            <Themed.img src="/images/btc9.jpg" height={250} ></Themed.img>
                        </Themed.p>

                        <Themed.p>Go back to <Link to="/">homepage</Link>.</Themed.p>
                    </Inner>
                </Content>
            </div>
        </Parallax>
    </Layout>
)

export default Page
