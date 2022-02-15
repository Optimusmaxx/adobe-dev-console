(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[174],{52181:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return i},default:function(){return s}});var a=t(22122),r=t(19756),d=(t(15007),t(64983)),m=t(99536),l=["components"],i={},o={_frontmatter:i},p=m.Z;function s(e){var n=e.components,t=(0,r.Z)(e,l);return(0,d.mdx)(p,(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"ims-apis"},"IMS APIs"),(0,d.mdx)("p",null,"Here is a list of Adobe Identity Management Services (IMS) APIs, which can be useful for specific use cases."),(0,d.mdx)("h2",{id:"userinfo"},"UserInfo"),(0,d.mdx)("p",null,"To return information about a specific user, send a GET request to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"/userinfo")," endpoint:"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"https://ims-na1.adobelogin.com/ims/userinfo/v2")),(0,d.mdx)("h4",{id:"parameters"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Mandatory"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"client_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Your client ID.")))),(0,d.mdx)("h4",{id:"request"},"Request"),(0,d.mdx)("p",null,"The request includes an ",(0,d.mdx)("inlineCode",{parentName:"p"},"Authorization")," header with the value ",(0,d.mdx)("inlineCode",{parentName:"p"},"Bearer {ACCESS_TOKEN}"),"."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n  'https://ims-na1.adobelogin.com/ims/userinfo/v2?client_id={YOUR_CLIENT_ID}' \\\n  -H 'Authorization: Bearer {ACCESS_TOKEN}' \\\n")),(0,d.mdx)("h4",{id:"response"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sub": "B0DC108C5CD449CA0A494133@c62f24cc5b5b7e0e0a494004",\n  "account_type": "ent",\n  "email_verified": true,\n  "address": {\n    "country": "US"\n  },\n  "name": "John Sample",\n  "given_name": "John",\n  "family_name": "Sample",\n  "email": "jsample@email.com"\n}\n')),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Properties"),(0,d.mdx)("th",{parentName:"tr",align:null},"Projected by scope"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"sub")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"openid")),(0,d.mdx)("td",{parentName:"tr",align:null},"Unique user ID.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"account_type")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"profile")),(0,d.mdx)("td",{parentName:"tr",align:null},"Can be one of:",(0,d.mdx)("br",null),(0,d.mdx)("ul",null,(0,d.mdx)("li",null,(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"ind"),":")," User is an individual account."),(0,d.mdx)("li",null,(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"ent"),":")," User is part of an organization.")))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"email_verified")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"email")),(0,d.mdx)("td",{parentName:"tr",align:null},"A boolean value which specifies if the user has verified their email.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"address")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"address")),(0,d.mdx)("td",{parentName:"tr",align:null},"Address of user. Only the two-digit country code is returned.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"name")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"profile")),(0,d.mdx)("td",{parentName:"tr",align:null},"Full name of user.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"given_name")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"profile")),(0,d.mdx)("td",{parentName:"tr",align:null},"Given name of user.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"family_name")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"profile")),(0,d.mdx)("td",{parentName:"tr",align:null},"Family name or last name of user.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"email")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"email")),(0,d.mdx)("td",{parentName:"tr",align:null},"User email address.")))),(0,d.mdx)("h2",{id:"token-revocation"},"Token revocation"),(0,d.mdx)("p",null,"To revoke access tokens, send a POST request to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"/revoke")," endpoint:"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"https://ims-na1.adobelogin.com/ims/revoke")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Note:")," Users can revoke access to your application themselves by visiting the ",(0,d.mdx)("a",{parentName:"p",href:"https://accounts.adobe.com/security/connected-applications#"},"Connected Applications")," page. The next time the user launches your application, the authorization workflow will start from the beginning."),(0,d.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,d.mdx)("p",null,"Parameters can be sent in the body or as query parameters. Passing parameters in the body is recommended for sensitive data, as query parameters may be logged by app servers."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Mandatory"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"client_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"Only for PUBLIC clients"),(0,d.mdx)("td",{parentName:"tr",align:null},"Your client id.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"token")),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"Token you are invalidating. Can be an access token or a refresh token.")))),(0,d.mdx)("h4",{id:"authorization-by-client-type"},"Authorization by client type"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Client Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Authorization"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Confidential"),(0,d.mdx)("td",{parentName:"tr",align:null},"Basic Authorization header.",(0,d.mdx)("br",null),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"Authorization: Basic Base64(clientId:clientSecret)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Public"),(0,d.mdx)("td",{parentName:"tr",align:null},"Client Id passed as parameter.")))),(0,d.mdx)("h4",{id:"request-for-confidential-client"},"Request for confidential client"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n  https://ims-na1.adobelogin.com/ims/revoke \\\n  -H 'Authorization: Basic {AUTHORIZATION}' \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -d 'token={TOKEN}'\n")),(0,d.mdx)("h4",{id:"request-for-public-client"},"Request for PUBLIC client"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n  https://ims-na1.adobelogin.com/ims/revoke?client_id={CLIENT_ID} \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -d 'token={TOKEN}'\n")),(0,d.mdx)("h4",{id:"response-1"},"Response"),(0,d.mdx)("p",null,"A successful response returns HTTP Status 200 (OK) and no response body."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-authentication-ims-md-fdec23e04a7c38d53856.js.map