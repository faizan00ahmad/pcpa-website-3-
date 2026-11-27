/*
 * Email of each member company as printed in the two 2025-26 member lists, keyed by the serial number (S#) in that list.
 * The lists are scans, so these were typed out by hand: the Secretariat should check them against its records.
 * Members with no email, or with an address too broken to be one, are left out.
 */
const parse = (s: string) =>
  new Map(
    s
      .trim()
      .split(/\s+/)
      .map((pair) => {
        const i = pair.indexOf(":");
        return [Number(pair.slice(0, i)), pair.slice(i + 1)] as const;
      }),
  );

export const corporateEmails = parse(`
1:mnt786@live.com 2:agrolixbwp@yahoo.com 3:greengro@livehotmail.com 4:ahagrochemicals_dgk@yahoo.com 5:wahidgroup@gmail.com
6:itcsessa@cyber.net.pk 7:info@aliakbargroup.com 8:info@aliakbargroup.com 9:info@aliakbargroup.com 10:info@aliakbargroup.com
11:info@aliakbargroup.com 12:shahidqureshi@4bgroup.com 13:fsd505@hotmail.com 14:info@saybangroup.com 15:syednasir@taragroup.com.pk
16:khalidhameed@taragroup.com.pk 17:chairmanagc@allahdingroup.com 18:chairmanagc@allahdingroup.com 19:ceoagc@allahdingroup.com 20:hexongroup@gmail.com
21:president@evyolgroup.com 22:president@evyolgroup.com 23:head.mkt@evyolgroup.com 24:khriazhussain@hotmail.com 25:ceo@suncropgroup.com
26:ceo@suncropgroup.com 27:ceo@suncropgroup.com 28:ceoagc@yahoo.com 29:khalil@solex.com.pk 30:shafqat.p4l@gmail.com
31:altaf@solex.com.pk 32:sonaryk@yahoo.com 33:nafeesvhrpk@hotmail.com 35:abmhr5@gmail.com 36:iqbalhassan@mobilink.blackberry.com
37:shahidazeem@yaqoobgroup.com 38:rao_m_afzal1@hotmail.com 39:shahidazeem@yaqoobgroup.com 40:annexchemicals@gmail.com 41:globalcspvt.ltd@gmail.com
42:mianhanif@yahoo.com 43:qaisar.abbas@agrow.pk 44:gleeinternational2013@gmail.com 45:accounts@al-noorgroup.com 46:jamshedcheema@aurigagroup.com
47:agriumenterprises@hotmail.com 48:agrimorepk@hotmail.com 49:sarwarmba1976@gmail.com 50:info@comegapakistan.com 51:usman@comdgroup.com
52:admin@topsunchemicals.com 53:agrozatheadoffice@gmail.com 54:freshfieldglobal@gmail.com 55:ceo@riseag.com.pk 56:sales.guardagri@gmail.com
57:nadeemqureshi@4bgroup.com 58:usman@comdgroup.com 59:khalidhameed@taragroup.com.pk 60:adilzafar22@gmail.com 61:khalidhameed@taragroup.com.pk
62:agricorepvtltd@gmail.com 63:mkraza1026@hotmail.com 64:cropli@protonmail.com 66:amir.aziz@aziz-group.com 67:agricominternational6@gmail.com
68:rizwan.phyto@outlook.com 70:fayyazgroupkpr@gmail.com 71:hammadmiyan@live.com 72:sohnidharti@sohnidharti.com.pk 73:contact@manuchar.com
74:hmc264@yahoo.com 75:vgroseed@yahoo.com 76:imasad.wr@gmail.com 77:kewlanihansraj@gmail.com
`);

export const associateEmails = parse(`
2:maazagrochem@yahoo.com 3:cottonqualitybwp@hotmail.com 4:exertchemicals71@yahoo.com 5:farmerschoice_enterprises@yahoo.com 6:zahidjaved108@gmail.com
7:ahsanmunir2003@hotmail.com 8:superpesticides@hotmail.com 9:hm.sardarsuperstar@yahoo.com 10:agricare34@gmail.com 11:wellcome_agro_sc@yahoo.com
12:taskagro@gmail.com 13:wahidgroup@gmail.com 14:saeedahmaddahir@gmail.com 15:greenlandinter@hotmail.com 16:greenmark49@gmail.com
17:uniqueagro1@gmail.com 18:saverenterprises@yahoo.com 19:a.fatah_soomro@hotmail.com 20:eaglecropsciences@gmail.com 21:rauf.pcpa@gmail.com
22:azamcheema@aurigagroup.com 23:afmenterprises@hotmail.com 24:ranaimtiazali@hotmail.com 25:hanif@suncropgroup.com 26:nadeemqureshi@4bgroup.com
27:shaukatislam.islam@yahoo.com 28:ahmadyr@eoncompanies.com 29:agrenpakistan@gmail.com 30:ilyasahmed103@gmail.com 31:nicecropexcellence@yahoo.com
32:roots.international@yahoo.com 33:theexpertsmul@hotmail.com 34:kareemchemicals@gmail.com 35:raufakif@eoncompanies.com 36:asifrao262@hotmail.com
37:toqeerahmed_exin@yahoo.com 38:latif@suncropgroup.com 39:ittefaqchemical@yahoo.com 40:agrica.chemicals@gmail.com 41:anqaagro123@gmail.com
42:shahzadghani1@yahoo.com 43:buraqagro@yahoo.com 44:burhanagro-2013@gmail.com 45:mywahla@gmail.com 46:farmevo@gmail.com
47:javaidsuccess@gmail.com 48:shazoahmad@yahoo.com 49:asifnc@hotmail.com 50:nixalite.agro@gmail.com 51:royalagro_services@yahoo.com
52:info@saanjhgroup.com 53:asgharag@gmail.com 54:altaf@solex.com.pk 55:altaf@solex.com.pk 56:altaf@solex.com.pk
57:zahabchemicals@gmail.com 58:agrasinternational_sdk@yahoo.com 59:khalidhameed@taragroup.com.pk 60:kamranchpk@hotmail.com 61:floweragro@hotmail.com
62:m_zahid273@hotmail.com 63:biostar_daisseeds@hotmail.com 65:allurechemical@gmail.com 66:economypesticides786@hotmail.com 67:rauf.pcpa@gmail.com
69:zulfiqar.patron@gmail.com 70:info@newagricare.com 71:aimsagro88@gmail.com 72:paragon.chemicals@yahoo.com 74:malik_riaz@hotmail.com
75:rashidi62d@gamil.com 78:horticulturist2002@yahoo.com 80:popularagrochemicals@hotmail.com 82:agrileaf@gmail.com 84:ashraf.malik87@yahoo.com
85:info@saybangroup.com 86:sikandarazam@saybangroup.com 87:sikandarazam@saybangroup.com 88:bioforcechem@gmail.com 89:powecropsciences@gmail.com
91:arasheed.alspk@gmail.com 92:agroshinepesticide@gmail.com 93:greenishchemicals@outlook.com 94:agrooneenterprises@gmail.com 95:agroguard@gmail.com
96:info@arab.com.pk 98:greenzoneservicespk@gmail.com 99:histandard2016@gmail.com 100:rashidahmadpittafi@gmail.com 101:khalilgroup786@gmail.com
102:fazallangove@yahoo.com 103:shakeel@endeavorgroup.com.pk 104:vertexint2222@gmail.com 105:najeebullah859@yahoo.com 107:bilal.agron@gmail.com
108:maxgrow471@gmail.com 109:chshaukatislam@gmail.com 110:962374736@99.com 111:apcotcropsciences@gmail.com 112:sagheer1974@gmail.com
113:infor@waseelapesticides.com 114:wellmarkryk@gmail.com 115:gm4scryk@gmail.com 119:asiaagrochemicals@gmail.com 121:topstar.mux@gmail.com
122:everestag@yahoo.com 124:saleemnasirks@gmail.com 125:qahirfromamcpak@yahoo.com 126:shafiqbutt@parbat.com.pk 127:bilal@ayeshagroup.com
128:hamqadamcs@gmail.com 132:mianaslam287@gmail.com 133:muzamilkhan8899@gmail.com 134:ashfaq6999@yahoo.com 135:office@sessaagro.com
136:ambritkhemani@gmail.com 137:zarkhaz81@gmail.com 138:ctechagriservices@gmail.com 139:azoneinternational2017@gmail.com 140:usman.alpine@gmail.com
141:farmevo@gmail.com 142:panstarpl@yahoo.com 143:sajid@grolecrops.com 144:meezanac@gmail.com 146:biotrack1@hotmail.com
147:jamshedcheema@aurigagroup.com 148:arif.bankwit@gmail.com 149:apachechemicals17@gmail.com 150:triconagro@gmail.com 151:jabbarahmadsvr@gmail.com
152:pestkill13@hotmail.com 153:peartagro@gmail.com 157:info@technofarm.pk 158:pakfarmingcare@gamil.com 159:aggrio@aggrio.com
161:welcareslpk@yahoo.com 163:finecropsciences@gamil.com 164:shahidnafees97@gmail.com 165:futurechemicals254@gmail.com 171:sattar_azhar@yahoo.com
174:royalcropsciencesjob@gmail.com 175:info@grace.pk 176:geochemicals@yahoo.com 177:arbicointernational@gmail.com 178:gomajeeagriscience@gmail.com
180:hrnongyao@gmail.com 181:mursaleenjl197@gmail.com 182:farmistochemicals@gmail.com 185:shakil@rainbowagro.com 186:sunwayagrochemicals@gmail.com
187:nramy72@yahoo.com 188:hudaibiachemicals@gmail.com 189:fairfield0313@gmail.com 190:info@innovapakistan.com 192:aitemadagrochemicals@gmail.com
193:nusunpesticides@gmail.com 194:entochemicals@gmail.com 195:crop_health@yahoo.com 196:gulfcropsciences@gmail.com 197:rashidbiogrow@gmail.com
198:ittehadbrotherschemicals@gmail.com 202:ijaz@alitareenfarms.com 203:carechemicalscorp@gmail.com 204:newagrosciences111@gmail.com 205:marshal_group27@gmail.com
208:iplantcare@gmail.com 209:patriot25c@gmail.com 210:smartscience.chemsol@gmail.com 212:javedfivestar@gmail.com 213:arhamenterprises8770870@gmail.com
215:kisansultannnvk@gmail.com 216:hbinternational107@gmail.com 217:umarwaheed450@gmail.com 218:farhan.aziz@hotmail.com 219:rmushtaq766@gmail.com
220:chunghwa-biotech@163.com 221:agrowellchemicals@gmail.com 222:k.c.i@outlook.com 223:soorajcropscienc@hotmail.com 224:rosechemlifescience@gmail.com
225:newfarmagriservices@gmail.com 226:akgroupltd1@gmail.com 227:insegochemicals@gmail.com 228:primeagriservice@gmail.com 231:info@mdsagrotech.com
232:info@vanguardagri.com 233:rukhsanabasra@yahoo.com 234:abdullah.haseebtraders@gmail.com 235:ghaznavichemicals@gmail.com 237:agriscent@gmail.com
240:bawal1636@gmail.com 241:greencopvtltd@gmail.com 242:info@edgegroup.pk 243:agribiotec.ceo@gmail.com 244:usman@habimfertilizer.com
245:d.shad793@gmail.com 246:taqiullahzat@gmail.com 247:foreigngroup.pk@gmail.com 248:aifaagrochem@gmail.com 251:zm.mudammadaslam@gmail.com.pk
252:hajisherzaman1976@gmail.com 256:ahmadsattardgk@gmail.com 257:qcipk@yahoo.com 258:agrigoldbwp362@gmail.com 259:fcagro99@gmail.com
260:azeemakram44@gmail.com 261:rashid.ali@vitalagro.com.pk 262:cac.chemicals056@gmail.com 263:haseeb.dgkhan@gmail.com 264:iqraraliiii@gmail.com
265:fscvhr1624@gmail.com 266:gnosch.international@gmail.com 267:ranasafiullah313@gmail.com 268:granulars@cyber.net.pk 269:perfectcropsciences@gmail.com
271:gshabbir2421@gmail.com 272:jenevaagribusiness@gmail.com 273:ceo@agrileafint.com 274:beaconcrop@gmail.com 276:arshad.adil@yahoo.com
277:w.akram15wa@gmail.com 279:iftikharahmad742@gmail.com 280:farmsciences21@gmail.com 283:info@pesticongroup.com.pk 284:zoomtechnologies2k@gmail.com
285:royalagrochemicals@yahoo.com 286:changagrobwp@gmail.com 287:chandagrobwp@gmail.com 288:info@captaangroup.com 290:ayatagrochemicals@gmail.com
292:sarsabz116@gmail.com 293:targetagro65@gmail.com 295:info@saudideltaco.com 296:heartstaragc@gmail.com 297:ahmadhussain360@gmail.com
298:sgsardar@gmail.com 300:relianceagpk@gmail.com 301:amazonchemical@yahoo.com 302:greenlypesticides@gmail.com 304:info@zamanonag.com
305:bgagrochemical@hotmail.com 307:targetagro65@gmail.com 308:aegrivochemicals24@gmail.com 310:at.rehman1628@gmail.com 312:ramazanhaji88@gmail.com
313:passionagropak@gmail.com 314:qayyumcropsciences@gmail.com 315:bsenterprises087@gmail.com 316:staragrochemical607@gmail.com 317:umershafi@metacrop.com.pk
318:ayazzalql@gmail.com 319:vertexagroinputs106@gmail.com 320:pakinfo@agrisolinic.com 322:pakstarchem@gmail.com 324:fsd505@hotmail.com
325:info@fertiscience.pk 326:agrogate7@gmail.com 329:cultevogroup@gmail.com 330:info@topsungroup.pk 331:info@topsungroup.pk
332:safecrop786@gmail.com 333:agventure@gmail.com 334:masoodurrehman26@gmail.com 335:zsl19880128@163.com 336:infor@emiratescropsci.com
338:gulfagro2021@gmail.com 339:info@topsungroup.pk 340:info@topsungroup.pk 341:info@topsungroup.pk 342:talentagrosciences@gmail.com
343:ilyaschahalanco1@gmail.com 344:jamalnasirch@gmail.com 347:mubashirmian.mm@gmail.com 349:unifertagrow@gmail.com 350:richcropsciences@gmail.com
351:byonag@gmail.com 354:universal.bt.pk@gmail.com 355:myland.agro@gmail.com 357:alliedagrimarketing123@gmail.com 358:theomexgroup@gmail.com
359:plant.carebwp@gmail.com 360:ppakgreen@yahoo.com 361:sunstarofo@gmail.com 362:sheikh.asghar@gmail.com 363:info@wazchem.com
364:pakistanagri2@gmail.com 366:zamoraag@gmail.com 367:tokyogreeninternational@gmail.com 368:zaratagofficial@gmail.com 369:atifmushtaq.p4l@gmail.com
370:cropmaxagro@gmail.com 371:seawaysenterprises.pk@gmail.com 373:titanchemicald715@gmail.com 374:dailygreenprivatelimited@gmail.com 375:waqaracpl@gmail.com
376:info@telekomcyber.com 377:acedfwagrochem@gmail.com 378:marwancropcare@gmail.com
`);
