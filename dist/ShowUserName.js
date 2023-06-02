function F(n){window.enmity.plugins.registerPlugin(n)}const c=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const b=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme;const p=window.enmity.modules.common.Linking,I=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function N(n){return window.enmity.patcher.create(n)}var d="ShowUserName",S="1.0.0",A="show their username in servers too",R=[{name:"mafu",id:"519760564755365888"}],D="#ffddbc",L={name:d,version:S,description:A,authors:R,color:D};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList;const _=e.Image;e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const x=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const w=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const T=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const i=e.FormRow,f=e.FormSection;e.FormSelect,e.FormSubLabel;const v=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function s(n){return window.enmity.assets.getIDByName(n)}function u(...n){return window.enmity.modules.getByProps(...n)}window.enmity.modules.common;const B=s("img_account_sync_github_white"),P=s("Discord"),k=s("img_account_sync_twitter_white"),M=s("ic_edit_24px"),V=s("ic_group_dm"),U=u("acceptInviteAndTransitionToInviteChannel");var O=({settings:n})=>{const t=I.createThemedStyleSheet({container:{flexDirection:"row",justifyContent:"center",alignItems:"center"},image:{width:70,height:70,marginTop:20,marginLeft:20},title:{flexDirection:"column"},name:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:c.ThemeColorMap.HEADER_PRIMARY},author:{fontSize:15,paddingLeft:50,color:c.ThemeColorMap.HEADER_SECONDARY},info:{height:45,paddingTop:3,paddingBottom:3,justifyContent:"center",alignItems:"center"},footer:{color:c.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",paddingTop:10,paddingBottom:20}});return o.createElement(x,null,o.createElement(T,{style:t.container},o.createElement(_,{source:{uri:"https://avatars.githubusercontent.com/u/43488869"},style:t.image}),o.createElement(T,{style:t.title},o.createElement(w,{style:t.name},"ShowUserName"),o.createElement(w,{style:t.author},"by mafu"))),o.createElement(f,{title:"SETTING"},o.createElement(i,{label:"Replace server nickname entirely",leading:o.createElement(i.Icon,{source:M}),trailing:o.createElement(v,{value:n.getBoolean("replace",!1),onValueChange:m=>{n.set("replace",m)}})}),o.createElement(i,{label:"Show display name",leading:o.createElement(i.Icon,{source:V}),trailing:o.createElement(v,{value:n.getBoolean("display",!0),onValueChange:m=>{n.set("display",m)}})})),o.createElement(f,{title:"INFORMATION"},o.createElement(i,{label:"Follow me on Twitter",style:t.info,trailing:i.Arrow,leading:o.createElement(i.Icon,{source:k}),onPress:()=>{p.openURL("https://twitter.com/m4fn3")}}),o.createElement(i,{label:"Visit my server for help",style:t.info,trailing:i.Arrow,leading:o.createElement(i.Icon,{source:P}),onPress:()=>{U.acceptInviteAndTransitionToInviteChannel({inviteKey:"TrCqPTCrdq",context:{location:"Invite Button Embed"},callback:()=>{b.pop()}})}}),o.createElement(i,{label:"Check Source on GitHub",style:t.info,trailing:i.Arrow,leading:o.createElement(i.Icon,{source:B}),onPress:()=>{p.openURL("https://github.com/m4fn3/ShowUserName")}})),o.createElement(w,{style:t.footer},`v${S}`))};function E(n,t,m){return window.enmity.settings.get(n,t,m)}const C=N("ShowUserName"),H=u("View"),$=u("getUser"),{DCDChatManager:z}=H.NativeModules,G={...L,onStart(){C.before(z,"updateRows",(n,t,m)=>{var g,y;const h=JSON.parse(t[1]);for(const r of h){if(r.type!==1||!((g=r.message)!=null&&g.authorId)||!((y=r.message)!=null&&y.username))continue;let a=$.getUser(r.message.authorId);if(!a)continue;let l=a.discriminator==="0"?a.username:a.tag;a.globalName&&E(d,"display",!0)&&(l+=` - ${a.globalName}`),E(d,"replace",!1)?r.message.username=l:r.message.username+=` (${l})`}t[1]=JSON.stringify(h)})},onStop(){C.unpatchAll()},getSettingsPanel({settings:n}){return o.createElement(O,{settings:n})}};F(G);