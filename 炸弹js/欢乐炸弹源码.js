var openWindow=null;
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get() 
var ad=android.app.AlertDialog.Builder
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{
var d=new ad(ctx)
d.setNegativeButton("确认已看完信息",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
}})
d.setTitle("关于")
d.setMessage("请仔细阅读以下内容:\n①本js由以下人员参与制作，在这里感谢它们对本js的付出:\n梦想成真(代码制作人员)\n②js版权信息:本js的解释权归梦想成真所有，没有联系制作人员私自转载属于侵权行为，切勿更改制作人员信息。如有疑问可以联系制作人员QQ:1660838232\n③下面为了解本js的指令(在聊天框输入/开头加上指令即可输入):\n配方:了解每个物品的配方\n攻略:迅速了解js各个物品使用方法\n防止爆炸:开启防爆插件，使方块不会受到爆炸影响、取消插件:取消设置插件\n④一般的物品都是点地爆炸，部分炸弹支持⊙，例如枪械。\n最后，祝大家游玩开心!")
d.show()
}catch(e){print(e)}
}}))
ModPE.setItem(399,"fireworks",0,"摔炮",64);
ModPE.setItem(400,"地雷",0,"遥控地雷",64);
ModPE.setItem(401,"lever",0,"遥控按钮",64);
ModPE.setItem(410,"手雷",0,"手雷",64);
ModPE.setItem(402,"c4",0,"c4炸弹",64);
ModPE.setItem(404,"高爆手雷",0,"高爆手雷",64);
ModPE.setItem(405,"红石地雷",0,"红石地雷",64);
ModPE.setItem(406,"鸡尾酒",0,"鸡尾酒",64);
ModPE.setItem(407,"鞭炮",0,"鞭炮",64);
ModPE.setItem(408,"定时c4",0,"定时c4",64);
ModPE.setItem(409,"鱼雷冲天炮",0,"鱼雷冲天炮",64);
ModPE.setItem(411,"弹簧",0,"弹簧",64);
ModPE.setItem(412,"水弹簧",0,"水弹簧",64);
ModPE.setItem(413,"c4工具钳",0,"c4工具钳",64);
ModPE.setItem(414,"盾牌",0,"盾牌",64);
ModPE.setItem(420,"炸弹手枪",0,"炸弹手枪",64);
ModPE.setItem(416,"弹药",0,"弹药",64);
ModPE.setItem(417,"烟雾弹",0,"烟雾弹",64);
Item.addCraftRecipe(399,1,0,[12,3,0,289,1,0]);
Item.addCraftRecipe(400,1,0,[77,1,0,289,2,0]);
Item.addCraftRecipe(402,1,0,[77,3,0,289,2,0,331,3,0]);
Item.addCraftRecipe(403,1,0,[12,3,0,289,3,0]);
Item.addCraftRecipe(404,1,0,[12,3,0,289,6,0]);
Item.addCraftRecipe(405,1,0,[77,1,0,289,3,0,331,3,0]);
Item.addCraftRecipe(406,32,0,[259,1,0]);
Item.addCraftRecipe(407,1,0,[280,3,0,289,5,0,5,1,0]);
Item.addCraftRecipe(408,1,0,[402,1,0]);
Item.addCraftRecipe(409,1,0,[407,1,0,46,1,0]);
Item.addCraftRecipe(411,1,0,[265,4,0,280,1,0]);
Item.addCraftRecipe(412,1,0,[265,4,0,280,1,0,325,1,8]);
Item.addCraftRecipe(413,1,0,[265,2,0,280,1,0]);
Item.addCraftRecipe(414,1,0,[265,6,0,102,3,0]);
Item.addCraftRecipe(420,1,0,[265,6,0,280,1,0,331,2,0]);
Item.addCraftRecipe(416,1,0,[289,1,0]);
Item.addCraftRecipe(417,20,0,[259,1,0]);
Player.addItemCreativeInv(399,1,0);
Player.addItemCreativeInv(400,1,0);
Player.addItemCreativeInv(401,1,0);
Player.addItemCreativeInv(402,1,0);
Player.addItemCreativeInv(410,1,0);
Player.addItemCreativeInv(404,1,0);
Player.addItemCreativeInv(405,1,0);
Player.addItemCreativeInv(406,1,0);
Player.addItemCreativeInv(407,1,0);
Player.addItemCreativeInv(408,1,0);
Player.addItemCreativeInv(409,1,0);
Player.addItemCreativeInv(411,1,0);
Player.addItemCreativeInv(412,1,0);
Player.addItemCreativeInv(413,1,0);
Player.addItemCreativeInv(414,1,0);
Player.addItemCreativeInv(420,1,0);
Player.addItemCreativeInv(416,1,0);
Player.addItemCreativeInv(417,1,0);
Item.setHandEquipped(411,true);
Item.setHandEquipped(412,true);
Item.setHandEquipped(413,true);
Item.setHandEquipped(414,true);
Item.setHandEquipped(420,true);
Item.setHandEquipped(416,true);
var 延时=0,开=false,t=0,PX=0,PY=0,PZ=0,坐标x=0,坐标y=0,坐标z=0,埋雷=false,地雷数=0,坐标x1=0,坐标y1=0,坐标z1=0,c4=false,时间=0,验证时间=0,验证=false,x1=0,y1=0,z1=0,雷=false,时=0,x2=0,y2=0,z2=0,高雷=false,高时=0,一开=false,x3=0,y3=0,z3=0,红=false,烧=false,烧时=0,第一=false,第二=false,x5=0,y5=0,z5=0,第三=false,第四=false,连=false,连时=0,远=false,远1=false,远2=false,远3=false,远4=false,x6=0,y6=0,z6=0,红石地雷=0,鞭炮=0,
c4数=0,远时=0,x7=0,y7=0,z7=0,冲=false,冲时=0,远数=0,冲数=0,插件=false,id=0,耐久=30,耐久1=15,i=0,拆=0,发射=false,子弹=5,放大=false,放=false,防御=false,防=false,烟=false,x8=0,y8=0,z8=0,yan=0,c=0;
var x9=0,y9=0,z9=0
function useItem(x,y,z,itemID,blockID)
{
if(itemID==399)
{
print("还剩4秒爆炸");addItemInventory(399,-1,0)
PX=Player.getX();PY=Player.getY();PZ=Player.getZ();
Level.spawnMob(PX,PY-1,PZ,65);
}
if(itemID==400&&地雷数==1)
{
print("对不起放置失败，请在爆炸后重试");
}
if(itemID==402&&c4数==1)
{
print("对不起放置失败，请在爆炸后重试");
}
if(itemID==405&&红石地雷==1)
{
print("对不起放置失败，请在爆炸后重试");
}
if(itemID==407&&鞭炮==1)
{
print("对不起放置失败，请在爆炸后重试");
}
if(itemID==408&&远数==1)
{
print("对不起放置失败，请在爆炸后重试");
}
if(itemID==409&&冲数==1)
{
print("对不起放置失败，请在爆炸后重试");
}
if(itemID==417&&yan==1)
{
print("对不起放置失败，请在消失后重试");
}
else if(itemID==400&&地雷数<1)
{
print("放置成功,使用方法:使用按钮点击地面");埋雷=true;
addItemInventory(400,-1,0);addItemInventory(401,+1,0);
坐标x=Player.getX();坐标y=Player.getY();坐标z=Player.getZ();
setTile(坐标x,坐标y-1,坐标z,70,0);
setTile(坐标x,坐标y-2,坐标z,2,0);
clientMessage("§6已经在爆炸处设置了一个压力板");
地雷数++;
}

else if(itemID==402&&c4数<1)
{
print("安装c4完毕,请在聊天框输入安装时间/(后面填秒)");
c4=true;addItemInventory(402,-1,0)
坐标x1=Player.getX();坐标y1=Player.getY();坐标z1=Player.getZ();
setTile(坐标x1,坐标y1-1,坐标z1,72,0);
setTile(坐标x1,坐标y1-2,坐标z1,2,0);
c4数++;
}
else if(itemID==405&&红石地雷<1){
print("设置成功,请在聊天输入爆炸进行设置，或者输入默认，默认为旁边坐标");addItemInventory(405,-1,0);
红=true;红石地雷++;
}
else if(itemID==406){
print("开始燃烧");x9=Player.getX();y9=Player.getY();z9=Player.getZ();addItemInventory(406,-1,0);
烧=true;
}
else if(itemID==407&&鞭炮<1){
print("开始爆炸");addItemInventory(407,-1,0);
连=true;鞭炮++;
}
else if(itemID==408&&远数<1){
print("安装c4完毕,26秒后爆炸。");addItemInventory(408,-1,0);
远=true;
x6=Player.getX();y6=Player.getY();z6=Player.getZ();
setTile(x6,y6-1,z6,72,0);
setTile(x6,y6-2,z6,2,0);
远数++;
}
else if(itemID==409&&冲数<1){
print("设置完毕");addItemInventory(409,-1,0);
x7=Player.getX();y7=Player.getY();z7=Player.getZ();
setTile(x7,y7-1,z7,70,0);
setTile(x7,y7-2,z7,2,0);
冲=true;冲数++;
}
else if(itemID==411){
耐久--;
print("耐久值:"+耐久);
setVelY(getPlayerEnt(),0.8);
preventDefault();
}
else if(itemID==412){
耐久1--;
print("耐久值:"+耐久1);
setTile(Player.getX(),Player.getY(),Player.getZ(),9,0);
setVelY(getPlayerEnt(),0.8);
preventDefault();
}
else if(itemID==413&&blockID==72&&验证==true||itemID==413&&blockID==72&&远==true){
拆++;print("目前拆的次数"+拆);
}
else if(itemID==420&&放==false){
放=true;放大=true;print("开始放大");
}
else if(itemID==420&&放==true){
放=false;放大=false;print("取消放大");
}
else if(itemID==417){
烟=true;x8=Player.getX();y8=Player.getY()-1;z8=Player.getZ();addItemInventory(417,-1,0);yan++;
}
}
function procCmd(cmd/*输入的指令，不包括“/”*/) {
if(c4==true){if(cmd>0||cmd<0){时间=cmd;print("设置成功");clientMessage("设置时间:"+时间);验证=true;c41=true;c4=false;}}
if(红==true){if(cmd=="爆炸"){print("输入你想设置的x坐标");第一=true;红=false}if(cmd=="默认"){
print("向上弹5格，以免触发机关");setTile(Player.getX(),Player.getY()-3,Player.getZ(),46,0);setTile(Player.getX(),Player.getY()-2,Player.getZ(),2,0);setTile(Player.getX(),Player.getY()-1,Player.getZ(),70,0);
setVelY(getPlayerEnt(),1);
preventDefault();
红石地雷--
}}
if(第一==true&&红==false){if(cmd>0||cmd<0){x5=cmd;print("输入你想设置的y坐标");clientMessage("坐标x:"+x5);第二=true;cmd=0;第一=false}}
if(第二==true&&第一==false){if(cmd>0||cmd<0){y5=cmd;print("输入你想设置的z坐标");clientMessage("坐标y:"+y5);第三=true;cmd=0;第二=false}}
if(第三==true&&第二==false){if(cmd>0||cmd<0){z5=cmd;print("设置完毕");clientMessage("坐标z:"+z5);setTile(x5,y5-4,z5,46,0);setTile(x5,y5-3,z5,2,0);setTile(x5,y5-2,z5,70,0);第四=true;cmd=0;红石地雷--;第三=false;}}
if(cmd=="配方"){clientMessage("§6如果手持炸弹需要激活就要点地，点地后根据提示使用\n§3只有摔炮、手雷、高爆手雷、鸡尾酒可以连续点地使用，其他连续会出现bug\n§2配方:摔炮:3沙1火药 地雷:1石扭2火药 手雷:3沙3火药 高爆手雷:3沙6火药\n§6鸡尾酒:1打火石 c4:3石扭2火药2红石  鞭炮:5火药3木棍1木板\n§2定时c4:1c4 鱼雷冲天炮:1鞭炮1tnt 弹簧:4铁1木棍 水弹簧:4铁1木棍1水桶\n§3c4工具钳:3铁1木棍 盾牌:6铁3玻璃板 炸弹手枪:6铁2红石1木棍 炸药:1火药 烟雾弹:1打火石\n§1输入攻略查看作者推荐攻略");}
if(cmd=="攻略"){clientMessage("§1摔炮简洁使用方便，很适合随身携带，一摔就爆，非常推荐。\n§2地雷适合打伏击战，只要有人在地雷旁边就按下按钮爆炸，非常好用。\n§3手雷是摔炮的升级版，一次性爆炸4颗炸弹。\n§4高爆手雷是手雷界的终极版，一次性可以爆炸9颗炸弹!\n§5红石地雷是地雷的升级版，可以不用操作就会使自己爆炸，相当于挂机，非常推荐\n§6鸡尾酒是可以一点就着的酒瓶，可以很好的帮助自己逃跑。\n§7鞭炮是杀伤力很高的炮种，相比鸡尾酒来说更好逃跑，但是如果不小心会伤害自己。\n§8定时c4是针对pvp设置的c4炸弹，可以用在爆破战\n§9鱼雷冲天炮是一种信号弹，可以给队友传达sos信息，不适合用在对战中，非常推荐。\n§1弹簧是用来躲避tnt的爆炸伤害，可是如果不操纵好的话会对自己造成伤害\n§2水弹簧是弹簧的升级版，解决了操作困难的问题，减少了摔伤，非常推荐。\n§3c4工具钳是c4的克星，只要点击c4上面的木质压力板20次就可以拆解\n§4盾牌是针对炸弹而研发的被动武器，可以大大减少tnt对自己的伤害，点击⊙盾牌即可使用。\n§5炸弹手枪可以通过⊙键发射tnt，使用摔炮或弹药补充子弹，点地可以放大，可以简便携带炸药\n§6烟雾弹可以时周围发生烟雾，作战时非常推荐。")}
if(cmd=="防止爆炸"){
print("设置成功");
for(fk=0;fk<256;fk++)
Block.setExplosionResistance
(fk,Math.pow(Math.pow(99999,99999),99999))
}
if(cmd=="取消插件"){
print("设置成功");
for(fk=0;fk<256;fk++)
Block.setExplosionResistance
(fk,Math.pow(Math.pow(0,0),0))
}
}
function modTick() {
if(验证==true){
if(t!=20){t++}
if(t==20){验证时间++;t=0}
if(验证时间>=时间){clientMessage("§6c4开始爆炸,爆炸方胜利!");验证时间=0;时间=0;Level.spawnMob(坐标x1,坐标y1-3,坐标z1,65);验证=false;c4数--;}
}
else if(烧==true){
if(t!=20){t++}
if(t==20){烧时++;t=0}
if(烧时==1&&t==0){
print("开始燃烧");
if(Math.random()*100<50){
setTile(x9,y9-1,z9,51,0);setTile(x9+1,y9-1,z9,51,0);
setTile(x9,y9-1,z9+1,51,0);setTile(x9+1,y9-1,z9+1,51,0);
setTile(x9-1,y9-1,z9,51,0);setTile(x9,y9-1,z9-1,51,0);setTile(x9-1,y9-1,z9-1,51,0);}
else{setTile(x9,y9-1,z9,51,0);setTile(x9+1,y9-1,z9,51,0);
setTile(x9,y9-1,z9+1,51,0);setTile(x9+1,y9-1,z9+1,51,0);
setTile(x9-1,y9-1,z9,51,0);setTile(x9,y9-1,z9-1,51,0);setTile(x9-1,y9-1,z9-1,51,0);setTile(x9+1,y9-1,z9-1,51,0);setTile(x9-1,y9-1,z9+1,51,0)}
烧=false;烧时=0;t=0
}
}
else if(连==true){
if(t!=20){t++}
if(t==20){连时++;t=0}
if(连时==1&&t==0){clientMessage("§6第一颗炸弹爆炸");Level.spawnMob(Player.getX(),Player.getY()-1,Player.getZ(),65)}
else if(连时==2&&t==0){clientMessage("§6第二颗炸弹爆炸");Level.spawnMob(Player.getX(),Player.getY()-1,Player.getZ(),65)}
else if(连时==3&&t==0){clientMessage("§6第三颗炸弹爆炸");Level.spawnMob(Player.getX(),Player.getY()-1,Player.getZ(),65)}
else if(连时==4&&t==0){clientMessage("§6第四颗炸弹爆炸，爆炸结束。");Level.spawnMob(Player.getX(),Player.getY()-1,Player.getZ(),65);连时=0;t=0;鞭炮--;连=false}
}
else if(远==true){
if(t!=20){t++}
if(t==20){远时++;t=0}
if(远时==26&&t==0){Level.spawnMob(x6,y6-3,z6,65);print("开始爆炸");}
if(远时==30&&t==0){
print("爆破完成");远时=0;t=0;远数--;远=false;
}
}
else if(冲==true){
if(t!=20){t++}
if(t==20){冲时++;t=0}
if(冲时==1&&t==0){clientMessage("§6还剩4秒放置tnt");}
if(冲时==5&&t==0){clientMessage("§6开始放置第一颗tnt");Level.spawnMob(x7,y7-1,z7,65);}
if(冲时==6&&t==0){clientMessage("§6开始放置第二颗tnt");Level.spawnMob(x7,y7,z7,65);}
if(冲时==7&&t==0){clientMessage("§6开始放置第三颗tnt");Level.spawnMob(x7,y7+1,z7,65);}
if(冲时==8&&t==0){clientMessage("§6开始放置第四颗tnt");Level.spawnMob(x7,y7+2,z7,65);}
if(冲时==9&&t==0){clientMessage("§6开始放置第五颗tnt");Level.spawnMob(x7,y7+3,z7,65);}
if(冲时==10&&t==0){clientMessage("§6开始放置第六颗tnt，放置结束");Level.spawnMob(x7,y7+4,z7,65);冲时=0;t=0;冲数--;冲=false}
}
if(耐久<=0){addItemInventory(411,-1,0);
print("您的弹簧已经坏了");耐久=30;}
if(耐久1<=0){addItemInventory(412,-1,0);
print("您的弹簧已经坏了");耐久1=15;}
if(拆==20){验证=false;远=false;远时=0;t=0;远数--;验证时间=0;时间=0;c4数--;拆=0;print("拆解成功!");}
var a1=getPlayerX()
var a2=getPlayerY()
var a3=getPlayerZ()

ModPE.showTipMessage("§2X:"+Math.round(a1)+"§2Y:"+Math.round(a2)+"§2Z:"+Math.round(a3)+"手持子弹"+子弹)

if(烟==true){
if(t!=1){t++}
if(t==1&&c!=250){
Level.addParticle(5,x8,y8,z8,0,0,0,2);
Level.addParticle(5,x8-1,y8,z8,0,0,0,2);
Level.addParticle(5,x8+1,y8,z8,0,0,0,2);
Level.addParticle(5,x8,y8,z8-1,0,0,0,2);
Level.addParticle(5,x8,y8,z8+1,0,0,0,2);
Level.addParticle(5,x8,y8+1,z8,0,0,0,2);
Level.addParticle(5,x8-1,y8+1,z8,0,0,0,2);
Level.addParticle(5,x8+1,y8+1,z8,0,0,0,2);
Level.addParticle(5,x8,y8+1,z8-1,0,0,0,2);
Level.addParticle(5,x8,y8+1,z8+1,0,0,0,2);
Level.addParticle(5,x8+1,y8+1,z8+1,0,0,0,2);
Level.addParticle(5,x8-1,y8+1,z8-1,0,0,0,2);
Level.addParticle(5,x8+1,y8,z8+1,0,0,0,2);
Level.addParticle(5,x8-1,y8,z8-1,0,0,0,2);
Level.addParticle(5,x8-1,y8+1,z8+1,0,0,0,2);
Level.addParticle(5,x8+1,y8+1,z8-1,0,0,0,2);
Level.addParticle(5,x8+1,y8,z8-1,0,0,0,2);
Level.addParticle(5,x8+1,y8,z8-1,0,0,0,2);
Level.addParticle(5,x8+2,y8,z8,0,0,0,2);
Level.addParticle(5,x8+2,y8,z8+1,0,0,0,2);
Level.addParticle(5,x8+2,y8,z8-1,0,0,0,2);
Level.addParticle(5,x8-2,y8,z8,0,0,0,2);
Level.addParticle(5,x8-2,y8,z8+1,0,0,0,2);
Level.addParticle(5,x8-2,y8,z8-1,0,0,0,2);
Level.addParticle(5,x8+2,y8+1,z8,0,0,0,2);
Level.addParticle(5,x8+2,y8+1,z8+1,0,0,0,2);
Level.addParticle(5,x8+2,y8+1,z8-1,0,0,0,2);
Level.addParticle(5,x8-2,y8+1,z8,0,0,0,2);
Level.addParticle(5,x8-2,y8+1,z8+1,0,0,0,2);
Level.addParticle(5,x8-2,y8+1,z8-1,0,0,0,2);
t=0;c++}
}
if(c==250){c=0;烟=false;yan--}
if(发射==true){

pyaw = Entity.getYaw(Player.getEntity());

ppitch = Entity.getPitch(Player.getEntity());

velY = Math.sin((ppitch - 180) / 180 * Math.PI); 
velX = 2 * (Math.sin(pyaw / 180 * Math.PI) * Math.cos((ppitch - 180) / 180 * Math.PI)); 
velZ = 2 * (-1 * Math.cos(pyaw / 180 * Math.PI) * Math.cos((ppitch - 180) / 180 * Math.PI)); 

if(getCarriedItem()==399){

VTNT = Level.spawnMob(Player.getX() + Math.sin(pyaw / 180 * Math.PI) * Math.cos((ppitch - 180) / 180 * Math.PI) ,Player.getY()+0,Player.getZ() + -1 * Math.cos(pyaw / 180 * Math.PI) * Math.cos((ppitch - 180) / 180 * Math.PI) ,65);

setVelX(VTNT,velX);
setVelY(VTNT,velY);
setVelZ(VTNT,velZ);

addItemInventory(399,-1,0);
发射=false;
}
if(getCarriedItem()==406){

VTNT = Level.spawnMob(Player.getX() + Math.sin(pyaw / 180 * Math.PI) * Math.cos((ppitch - 180) / 180 * Math.PI) ,Player.getY()+0,Player.getZ() + -1 * Math.cos(pyaw / 180 * Math.PI) * Math.cos((ppitch - 180) / 180 * Math.PI) ,80);

setVelX(VTNT,velX);
setVelY(VTNT,velY);
setVelZ(VTNT,velZ);

addItemInventory(406,-1,0);
发射=false;
}
if(getCarriedItem()==411){
耐久--;
print("耐久值:"+耐久);
setVelY(getPlayerEnt(),0.8);
preventDefault();
}
if(getCarriedItem()==412){
耐久1--;
print("耐久值:"+耐久1);
setTile(Player.getX(),Player.getY(),Player.getZ(),9,0);
setVelY(getPlayerEnt(),0.8);
preventDefault();
}
if(getCarriedItem()==414&&防==false){
防御=true;防=true
print("开启防御状态");
}
else if(getCarriedItem()==414&&防==true){
防御=false;防=false
print("取消防御状态");
}
if(getCarriedItem()==410||getCarriedItem()==409||  getCarriedItem()==404){if(getCarriedItem()==410){addItemInventory(410,-1,0);}if(getCarriedItem()==409){addItemInventory(409,-1,0);}if(getCarriedItem()==404){addItemInventory(404,-1,0);}
VTNT = Level.spawnMob(Player.getX() + Math.sin(pyaw / 180 * Math.PI) * Math.cos((ppitch - 180) / 180 * Math.PI) ,Player.getY()+0,Player.getZ() + -1 * Math.cos(pyaw / 180 * Math.PI) * Math.cos((ppitch - 180) / 180 * Math.PI) ,65);

setVelX(VTNT,velX);
setVelY(VTNT,velY);
setVelZ(VTNT,velZ);

VTNT7 = Level.spawnMob(Player.getX() + Math.sin(pyaw / 180 * Math.PI) * Math.cos((ppitch - 180) / 180 * Math.PI) ,Player.getY()+0,Player.getZ() +-2  * Math.cos(pyaw / 180 * Math.PI) * Math.cos((ppitch - 180) / 180 * Math.PI) ,65);

setVelX(VTNT7,velX);
setVelY(VTNT7,velY);
setVelZ(VTNT7,velZ);

VTNT3 = Level.spawnMob(Player.getX()+1 + Math.sin(pyaw / 180 * Math.PI) * Math.cos((ppitch - 180) / 180 * Math.PI) ,Player.getY()+0,Player.getZ() + -2 * Math.cos(pyaw / 180 * Math.PI) * Math.cos((ppitch - 180) / 180 * Math.PI) ,65);

setVelX(VTNT3,velX);
setVelY(VTNT3,velY);
setVelZ(VTNT3,velZ);

VTNT5 = Level.spawnMob(Player.getX() + Math.sin(pyaw / 180 * Math.PI) * Math.cos((ppitch - 180) / 180 * Math.PI) ,Player.getY()+0,Player.getZ() +0  * Math.cos(pyaw / 180 * Math.PI) * Math.cos((ppitch - 180) / 180 * Math.PI) ,65);

setVelX(VTNT5,velX);
setVelY(VTNT5,velY);
setVelZ(VTNT5,velZ);
}
if(getCarriedItem()==420&&子弹!=0){
VTNT = Level.spawnMob(Player.getX() + Math.sin(pyaw / 180 * Math.PI) * Math.cos((ppitch - 180) / 180 * Math.PI) ,Player.getY()+0,Player.getZ() + -1 * Math.cos(pyaw / 180 * Math.PI) * Math.cos((ppitch - 180) / 180 * Math.PI) ,80);

setVelX(VTNT,velX);
setVelY(VTNT,velY);
setVelZ(VTNT,velZ);
子弹--
}
if(getCarriedItem()==420&&子弹<=0){
print("子弹不足，请使用换弹用摔炮补充");
}

发射=false;
}
if(getCarriedItem()==411||getCarriedItem()==412){
Entity.addEffect(getPlayerEnt(),1,40,1)
}
if(getCarriedItem()==414&&防御==true){
Entity.addEffect(getPlayerEnt(),2,40,2)
Entity.addEffect(getPlayerEnt(),4,40,1)
Entity.addEffect(getPlayerEnt(),11,40,1)
}
if(放大==true&&getCarriedItem()==420){
Entity.addEffect(getPlayerEnt(),2,5,2)
}
if(子弹>=6){子弹--;}
if(n==0&&getCarriedItem()==420){
    var x=[]
    var y=[]
    var z=[]
    x.push(Entity.getVelX(w))
    y.push(Entity.getVelY(w))
    z.push(Entity.getVelZ(w))
    var X=[]
    var Y=[]
    var Z=[]
    X.push(Entity.getX(w))
    Y.push(Entity.getY(w))
    Z.push(Entity.getZ(w))
   
    if(x==0&&y==0&&z==0){
    Level.spawnMob(X,Y,Z,65);
    n=1
    }
  }
if(n==0&&getCarriedItem()==406){
    var x=[]
    var y=[]
    var z=[]
    x.push(Entity.getVelX(w))
    y.push(Entity.getVelY(w))
    z.push(Entity.getVelZ(w))
    var x4=[]
    var y4=[]
    var z4=[]
    x4.push(Entity.getX(w))
    y4.push(Entity.getY(w))
    z4.push(Entity.getZ(w))
   
    if(x==0&&y==0&&z==0){
    
setTile(x4,y4-1,z4,51,0);setTile(x4+1,y4-1,z4,51,0);
setTile(x4,y4-1,z4+1,51,0);setTile(x4+1,y4-1,z4+1,51,0);
setTile(x4-1,y4-1,z4,51,0);setTile(x4,y4-1,z4-1,51,0);setTile(x4-1,y4-1,z4-1,51,0);
    n=1
    }
  }
}

function newLevel() {
moveGui();
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
//位置①
var win=new android.widget.PopupWindow();
//位置②
var layout=new android.widget.LinearLayout(ctx);
//位置③
var button=new android.widget.Button(ctx);
button.setText("换弹");
button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
var 格=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]; 
if(getCarriedItem()==399&&子弹!=5){
子弹+=2;addItemInventory(399,-1,0);print("换弹成功");
}
 for(i in 格){ 
if(Player.getInventorySlot(格[i])==416){
clientMessage("准备中...");
if(子弹!=5){
子弹++;addItemInventory(416,-1,0);print("换弹成功");
}
else if(子弹==5){
print("对不起不能再补充弹药了");
}
}}
}});
layout.addView(button)
win.setContentView(layout);
win.setWidth(100);
win.setHeight(600);
win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)))
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,0,0);
}}));
}

var tpopx =100;
var tpopy =510;
var mX,mY;
var gui=null
var downa=false
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()

function moveGui(){
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{
var layout=new android.widget.LinearLayout(ctx); 
var button=new android.widget.Button(ctx); 
button.setText("⊙"); 
button.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(v){ 
发射=true;
}}); 
button.setOnLongClickListener(new android.view.View.OnLongClickListener() {
			onLongClick: function(v,t){
 downa=true;
 var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);vibrator.vibrate(0);
 return true
					}
				});
button.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e) 
{
if(!downa)
{
mX=e.getX();
mY=e.getY()
}
if(downa)
{
var a=e.getAction();
if(a==2){
 var delX=parseInt(e.getX() - mX)*-1/10;
var delY=parseInt(e.getY() - mY)*-1/10;
tpopx = tpopx + delX;
tpopy = tpopy + delY;
gui.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
 }
if(a==1) downa=false;
} 
		 return false;
 }
})); 	
layout.addView(button); 
gui=new android.widget.PopupWindow(layout, dip2px(ctx,0), dip2px(ctx,0)); 

gui.setContentView(layout); 
gui.setWidth( android.widget.LinearLayout.LayoutParams.WRAP_CONTENT ); 
gui.setHeight( android.widget.LinearLayout.LayoutParams.WRAP_CONTENT )
gui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT,tpopx,tpopy)
}catch(err){print(err)}
}}))
}

function dip2px(ctx, dips){ 
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density); 
}


var n=1
var w
function entityAddedHook(entity/*生成的实体*/) {
  var k=[]
  k.push(Entity.getEntityTypeId(entity))
  if(k==80){

    n=0
    w=entity
  }
}
//本算法由小马提供

