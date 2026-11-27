/*
 * Associate class members, transcribed from "Associate PCPA Members for 2025-26" (379 companies).
 * One line per member: company|city|M/S number as printed in that list. Addresses, emails and contact persons are deliberately left out.
 */
const list = `
A-One Agro Chemicals|Ahmad Pur East|885
Maaz Agro Chemicals|Bahawalpur|622
Cotton Quality International|Bahawalpur|651
Exert Chemicals|Bahawalpur|671
Farmers Choice Enterprises|Bahawalpur|813
Novel Bio Sciences|Bahawalpur|628
Rallis Enterprises|Bahawalpur|782
Super Pesticides|Bahawalpur|602
Super Star Seeds & Chemicals|Bahawalpur|664
Agri Care Enterprises|Bahawalpur|872
Welcome Agro Chemicals|Bahawalpur|623
Task Agro|Chishtian|829
Agri Links International|D.G. Khan|A-796
Damas Chemicals|D.G. Khan|810
Green Land International|D.G. Khan|838
Green Mark Enterprises|D.G. Khan|815
Unique Agro Sciences|D.G. Khan|793
Saver Enterprises|Faisalabad|A-781
Nova Agro|Hyderabad|879
Eagle Crop Sciences|Jampur|855
Inform Chemicals|Kot Adu|169
Auriga Seed Corporation|Lahore|804
A.F.M. Pesticides|Lahore|744
4F Chemicals|Lahore|798
Hisun Enterprises|Lahore|817
Four Brothers Biologic AG Pakistan|Lahore|601
Anza Enterprises|Multan|635
Eon Bio Sciences|Multan|774
Agren Pakistan|Multan|861
Farmer Friends Agro Chemicals|Multan|694
Nice International Crop Excellence|Multan|674
Roots International|Multan|835
The Experts|Multan|735
Kareem Chemicals|Multan|880
Eon Fertilizer|Multan|844
Farm Eco Pvt. Ltd|Multan|812
Gallant International|Multan|783
Greenlet International|Multan|779
Ittefaq Chemicals Group|Multan|895
Agrica Chemicals|Multan|797
Anqa Agro|Multan|634
Al-Ghani International|Multan|630
Buraq Agro Chemicals|Multan|864
Burhan Agro Chemicals|Multan|848
Excel Crop Care|Multan|769
Farm Evo Enterprises|Multan|868
Gro More Enterprises|Multan|816
Innovative Chemicals|Multan|818
National Chemicals|Multan|633
Nixalite Agro Services|Multan|786
Royal Agro Services|Multan|823
Saanjh Pesticides|Multan|775
Panda AG (SMC-Pvt) Limited|Multan|889
Sol Fert Ag|Multan|825
Solex Chemical Enterprises|Multan|826
Solex Chemical Industries|Multan|831
Zahab Chemicals|Rahim Yar Khan|896
Agras International|Sadiqabad|723
Tara Imperial Industries (Pvt) Ltd|Lahore|863
Crown Star Agro Chemicals|Sahiwal|743
Flower Agro Chemicals|Vehari|724
Plus Enterprises|Vehari|820
Bio Star Chemicals|Vehari|807
Target Agro Chemicals|Lahore|851
Allure Chemical|Multan|901
Economy Pesticides|D.G. Khan|903
Agri Future Enterprises|Multan|908
Nuchem (Pvt) Ltd|Multan|909
Hussain Salman Chemicals|Multan|833
New Agri Care|Multan|910
Aims Agro Chemicals|Vehari|912
Paragon Chemicals|Vehari|913
UAQ Chemicals Industries|Multan|914
Pakchem International|Sahiwal|916
Alpha Agro Chemicals|Multan|137
AMB Agro Division|Quetta|720
Al Mahmood Chemicals|Quetta|136
Agro Chem Enterprises|Multan|920
Afam Agro Chemicals|Multan|921
Popular Agro Chemicals|Rahim Yar Khan|923
Abdullah Abbas Agro Services|Rahim Yar Khan|925
Agri Leaf International|Rahim Yar Khan|926
National Farming Care|Rahim Yar Khan|927
Agrolix International|Multan|929
Sayban Zari Markaz (Private) Limited|Lahore|931
Stallion Life Sciences (Private) Limited|Lahore|1231
Unihearts Agricultural Research & Services (Private) Limited|Lahore|1245
Bio Force Chemicals|Multan|933
Power Crop Sciences|Multan|938
Gonal International|Multan|942
Agri Plus|Multan|944
Agro Shine Pesticides|Lahore|947
Greenish Chemicals|Faisalabad|948
Agro One Enterprises|Lahore|949
Agro Guard Chemicals|Lahore|865
Arab Fertilizer & Agro Chemicals|Sahiwal|953
Agrarian Crop Sciences|Chichawatni|954
Green Zone Services|Ahmad Pur East|956
Standard Crop Chemicals|Rahim Yar Khan|957
Badal Crop Sciences|D.G. Khan|806
Ambrosia Chemicals|D.G. Khan|151
Allied Agro Enterprises|Quetta|961
Diamond Crops|Multan|A-964
Vertex International|Multan|966
Rizwan Agro Product Company|Quetta|968
Sinocrop Sciences|Multan|971
Chem & Chem (Pvt) Ltd|Lahore|972
Maxgrow Agro Chemicals|Faisalabad|973
Montis Enterprises|Multan|977
Sunshine Agro Sciences Corporation|Lahore|978
Apcot Crop Sciences|Bahawalpur|979
Future Chemicals Enterprises|Multan|981
Waseela Pesticides|Rahim Yar Khan|A-982
Well Mark Enterprises|Rahim Yar Khan|983
Four Season Chemicals|Rahim Yar Khan|984
Scion Crop Sciences|Bahawalpur|985
Baghban Enterprise|Multan|986
Captaan AG|Multan|987
Asia Agro Chemicals|Faisalabad|988
Plant Sciences|Multan|992
Topstar International|Multan|994
Everest AG (Pvt) Ltd|Multan|995
Sonaro CS (Pvt) Ltd|Lahore|A-1000
Plus International|Multan|1003
Lala Agro Sciences|Quetta|1007
Parbat Crop Sciences|Multan|1008
The Seed Company|Karachi|1010
Hamqadam Crop Sciences|D.G. Khan|1011
Cynor Enterprises|Vehari|1013
Vision Crop Sciences|Multan|1014
Kissan Favour Chemicals|Vehari|1015
Help Agro Chemicals|Rahim Yar Khan|1016
SunAgro Chemicals|D.G. Khan|1022
Sarsa Chemicals|Vehari|1023
S. Essa Agro|Karachi|1024
Intech Chemicals Enterprise|Hyderabad|1025
Zarkhaiz Agro Chemicals|Multan|1026
Crop Tech Agri Services|Lahore|1027
Azone International|Multan|1028
Alpine Agro Services|Sadiqabad|1029
Higro Chemicals|Multan|1031
Panstar Crop Sciences|Karachi|1032
GroLe Crops|Sahiwal|1034
Meezan Agro Chemicals|Multan|1035
Victoria AG|Multan|1036
Bio Track Enterprises|D.G. Khan|773
Roshan Crop Sciences|Lahore|951
Croplands Chemicals & Seed Services|Bahawalpur|789
Apache Chemicals|Multan|1037
Tricon Agro Chemicals|Lahore|1038
Hi Grade Chemicals|Faisalabad|A-1039
Pest Kill (Pvt.) Ltd.|Bahawalpur|181
Peart Agro Chemicals|Faisalabad|1040
Nectar Enterprises|Faisalabad|1041
ELMA AC|Multan|1042
Ahac Global|Multan|1216
Technofarm|Bahawalpur|1044
Pak Farming Care|Multan|646
Aggrio Pakistan (Pvt) Ltd|Multan|932
Sky Agro Chemical|Lahore|958
Welcare Chemicals Corporation|Sahiwal|604
AgroFarm|Kasur|1045
Fine Crop Sciences|Multan|1047
Nafees Entreprenure|Vehari|1049
Future Chemicals|Bahawalpur|1050
Star Crop Sciences|Multan|1046
Agri Friend International|Multan|1052
Tiger Crop Sciences|Vehari|1053
Sahifa International|Sahiwal|1054
Prato Crop Sciences|Multan|500
Wellwisher Agro Chemicals|Multan|1048
Rise AG Pakistan|Multan|1055
Adler AG|Multan|1056
Royal Crop Sciences (Pvt) Ltd|Lahore|1059
Grace Enterprises|Multan|1060
Geo Chemicals Corporation|Multan|1061
ARBICO Chemicals Industries|Multan|1064
Gomajee Agri Sciences|Karachi|1065
Continental Agro Sciences|Multan|1068
NONGYAO International|Hyderabad|1069
Chemtec Agro Sciences|Multan|1070
Farmisto Chemicals (Pvt) Ltd|Peshawar|1071
Neghban Crop Sciences|Multan|1074
Hyland International|Multan|1075
Solar AgroSciences (Pvt) Ltd|Lahore|1076
Sunway Agro Chemicals|Multan|1077
N.F Biotech|Multan|1080
Hudaiba Chemicals|D.G. Khan|1082
Fairfield Enterprises|Vehari|930
Innova Agri Solution|Lahore|1083
Nishan Agrochemicals|Lahore|A-1084
Aitemaad Agro Chemicals|Vehari|1085
Nusun Pesticides|D.G. Khan|1088
Ento Chemicals|Vehari|1089
Crop Health Sciences|Rahim Yar Khan|1092
Gulf Crop Sciences|Rahim Yar Khan|1093
Bio Gro Enterprises|Rahim Yar Khan|1096
Ittehad Brothers Chemicals|Rahim Yar Khan|1098
Solvay (Pvt) Ltd|Multan|1099
Kanzo AG (Pvt) Ltd|Multan|1100
Chemsun Enterprises|Multan|1101
ATF Agri Sciences (SMC-Pvt) Limited|Lahore|1103
Care Chemicals Corporation|Faisalabad|1105
New Agro Sciences|Multan|1109
Marshal Crop Sciences|Rahim Yar Khan|1110
Agro Leads International|Multan|1112
Oregons Green Pvt Ltd|Karachi|1113
I Plant Care|Multan|1114
Patriot Chemicals|Bahawalpur|1081
Smart Science & Chemicals Solution Pvt Ltd|Lahore|1117
Bio Qem Enterprises|Multan|1118
Five Star Agro Fertilizers|Lahore|1119
Arham Enterprises|Rahim Yar Khan|1120
Smart Agro Chemicals|Multan|1121
Kissan Sultan Agri Services Pvt Ltd|Lahore|1122
Hanif Brothers International|Chishtian|1117
Agrofena (Pvt) Ltd|Lahore|1124
Agrow Shell|Lahore|A-1143
Envita Crop Sciences|Burewala|1126
Chunghwa Biological Technology Private Limited|Lahore|A-1136
Agro Well Chemicals|Multan|A-1141
Kissan Confidence International|Multan|A-1116
Sooraj Crop Sciences|Lahore|49
Rosechem Life Science|Lahore|51
New Farm Agri Services Pvt Ltd|Multan|50
Agrisun Fertilizer & Chemicals|Gujranwala|1149
Insego Chemicals|Gujranwala|1150
Prime Agri Services|Multan|A-1136
Active Crop Sciences (Pvt) Ltd|Multan|1127
Green Lines Enterprises|Multan|1186
MDS Agrotech Pvt. Ltd|Multan|1195
Vanguard Agri Sciences Pvt. Ltd|Multan|1194
Veer Agro|Multan|1193
Abdullah & Haseeb Traders|Multan|1192
Ghaznavi Chemicals|Multan|1191
Matchless Enterprises|Multan|1190
Agriscent Agrochemicals & Fertilizer|Lahore|1183
Rachna Agro Chemicals (Pvt) Ltd|Gujranwala|1131
Agrotree Life Sciences (Pvt) Ltd|Multan|1120
Royal Pesticide Chemicals Pvt Ltd|Quetta|1178
Green Co Entrepreneur (Pvt) Ltd|Multan|1177
Chemco Global Pvt Ltd|Multan|1176
Agri Biotec Chemicals|Vehari|1175
Holsun Chemicals|Multan|1174
Trust Agro Sciences|Multan|1169
Zat Crop Sciences Pvt Ltd|Lahore|1172
Foreign Crop Sciences|Multan|1168
Aifa Agro Chem|Multan|1171
Nuvita Agro Chemicals|Burewala|1164
Exceed Agri Business|Multan|1163
Shine Star Agrochemicals|Multan|1162
Biozyme Life Science|Multan|1161
Asad Agro Services|Multan|1189
Solvay AG|Multan|1142
AgPharma Plant Sciences (Pvt) Ltd|Multan|1214
Riwayat|Multan|1215
Quality Chemicals Industries (Pvt.) Ltd.|Bahawalpur|16
Agri Gold (Pvt.) Ltd.|Bahawalpur|1
FC Agro Industries Pvt Ltd|Multan|1205
Trugreen Enterprises|Faisalabad|1204
Vital Agro Chemical Industries (Pvt) Limited|Haroonabad|1207
Creative Agro Chemicals|Faisalabad|1308
Essa Moosa Crop Sciences (EMC Sciences)|Multan|1206
Dharti Crop Science|Vehari|1208
Four Star Chemicals|Vehari|1209
Gnosch International|Multan|1202
Fair Chemicals|Multan|1201
Granulars (Pvt) Ltd.|Karachi|165
Perfect Crop Sciences (SMC-Private) Limited|Lahore|1210
Khirman Enterprises|Multan|1212
Suntech International|Bahawalpur|1264
Jeneva Agri Business|Sindh|1234
Agri Leaf Private Limited|Multan|1233
Beacon Crop Sciences|Multan|1253
Sahib Agro Services|Multan|1256
Agri Doctor Enterprises|Lahore|1235
Thrive Chemicals Enterprises|Vehari|1236
Montgomery Agro Chemicals (Pvt) Ltd|Sahiwal|1249
Pan Crop Chemicals|Lahore|1251
Farm Sciences|Faisalabad|1257
Smart Ag|Bahawalpur|1259
Cytiva AG|Bahawalpur|1260
Farma Grow (Private) Limited|Lahore|1261
Zoom Technologies|Multan|1246
Royal Agro Chemicals|Gujranwala|1239
Hi Star Agro Chemical Pvt Ltd|Bahawalpur|1258
Chand Agro Chemicals (Pvt) Ltd|Bahawalpur|1262
FERTI.M|Multan|1263
Planet Agro Industries Pvt Ltd|Bahawalpur|1318
Ayat Agro Chemicals|Lahore|1265
Novara (Private) Limited|Multan|1266
Sarsabz Pesticide|Bahawalpur|1268
Target Agro Chemicals (Pvt) Ltd|Lahore|1247
Venture Farming|Lahore|1242
Saudi Delta Company Pakistan|Lahore|1270
Heart Star Agro Chemical|Bahawalpur|1272
Nex Chem Enterprises|Multan|1281
SG Sardar (Pvt) Ltd|Multan|1282
Expert Seeds & Chemicals|Bahawalpur|1277
Reliance AG|Multan|1275
Amazon Chemicals (Pvt) Ltd|Multan|1276
Greenly Pesticide Co|Lahore|1237
Three Star Crop Sciences|Multan|1252
Zamanon Ag|Multan|1254
Biogen Agro Group of Chemicals|Multan|1274
South Asia Chemical|Lahore|1238
Target Homex|Lahore|1229
Aegrivo Chemicals|Multan|1228
Green Force International|Rahim Yar Khan|1227
Nova Star Pesticides|Multan|1226
Ajwa Agro|Lahore|1225
Muaviya Agro Chemicals|Quetta|1219
Passion Agro Pakistan|Bahawalpur|1218
Qayyum Crop Sciences Pvt Ltd|Multan|1221
BS Enterprises|Vehari|1225
Star Agro Chemicals|Vehari|1224
Meta Crop Sciences|Lahore|1224
Prime Agro Chemicals|Rahim Yar Khan|1217
Vertex Agro Inputs|Multan|1293
Canadian Agrisol (Private) Limited|Faisalabad|1215
C-Crop Agro Sciences|Multan|1214
Pakstar Chemicals|Lahore|1211
Altiga Agri Solution Pvt. Ltd|Peshawar|1057
Hextar Industries (Pvt.) Ltd.|Lahore|189
Fertiscience|Multan|939
Agro Gate Pakistan|Multan|1286
Anaya Fertilizers Company|Multan|1287
Five Brother Agro Services||1288
Cultevo Group of Companies|Lahore|1160
Sona Chemicals|Multan|1289
Topsun Bazar.com Pvt Ltd|Multan|1290
Safecrop|Multan|1291
AgVenture|Multan|1294
NASCO Agri Business Pvt Ltd|Lahore|1295
Chang Sheng Agro Chemical Pvt Ltd|Lahore|1296
Emirates Crop Sciences|Lahore|1297
Khushal Crop Sciences|Lahore|1298
Gulf Agro Chemicals & Fertilizer Pvt Ltd|Lahore|1299
Kisan Care Pvt Ltd|Multan|1301
Sinopak Chemicals|Multan|1302
Lotus Quality Seeds Pvt Ltd|Multan|1303
Talent Agro Sciences|Lahore|1303
Qila Crop Sciences|Gujranwala|1305
Solar Agro Chemicals|Multan|1306
Well Farm Life Sciences|Karachi|1307
Sardar Agro Pvt Ltd|Multan|1309
Pescom Agri Solution|Sindh|1310
Sawera Agro Chemical|Lahore|1311
Unifert Agrow|Vehari|1312
Rich Crop Sciences|Faisalabad|1313
Byon AG|Lahore|1314
Talon Chem Private Limited|Multan|1315
Crystal Crop Pesticides|D.G. Khan|1317
Fertigro Chemicals|Rahim Yar Khan|1319
My Land Agro Services|Sahiwal|1320
Herex Enterprises|Multan|768
Allied Agri Marketing|Bahawalpur|1321
Dragon AG International|Multan|1322
Plant Care Enterprises|Bahawalpur|873
Pak Green Chemicals|D.G. Khan|1323
Sunstar Pesticides|D.G. Khan|842
First Quality Chemicals|Multan|1325
WAZCHEM|Multan|1326
Pakistan Agri Sciences|Lahore|718
Soft Jenkins Solutions (Pvt) Ltd|Multan|1332
Zamora AG Pvt Ltd|Multan|1331
Tokyo Green International|Vehari|1329
Zarat AG|Multan|1328
Yara Crop Sciences (Pvt) Ltd|Multan|1333
Cropmax Agro Sciences|Vehari|1334
Seaways Enterprises|Vehari|1335
Falcon Fertilizers (Pvt) Ltd|Multan|1336
Titan Chemicals (Pvt) Ltd|Quetta|1337
Daily Green (Private) Limited|Multan|1341
Waqar Agro Chemical (Private) Limited|Multan|1342
Altimi Telekom & Ctyber Solution Pvt Ltd|Karachi|1339
ACE DFW Agro Chemicals Pakistan|Multan|1338
Marwan Crop Care|Quetta|1327
Ecdon International|Multan|1128
`;

export const associate: { company: string; city: string; ms: string }[] = list
  .trim()
  .split("\n")
  .map((line) => {
    const [company, city, ms] = line.split("|");
    return { company, city: city || "Not listed", ms };
  });
