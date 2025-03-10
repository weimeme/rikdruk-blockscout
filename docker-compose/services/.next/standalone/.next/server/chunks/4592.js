exports.id=4592,exports.ids=[4592],exports.modules={34592:(e,r,t)=>{"use strict";t.a(e,async(e,a)=>{try{t.r(r),t.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var l=t(20997),s=t(22210),o=t(70582),h=t(87986),i=t(16689),c=t.n(i),n=t(44831),u=t(33619);t(52854);var d=t(5646),p=e([s]);s=(p.then?(await p)():p)[0];let x=n.Z.features.graphqlApiDocs,_={".graphiql-container":{backgroundColor:"unset"}},__WEBPACK_DEFAULT_EXPORT__=()=>{let{colorMode:e}=(0,s.useColorMode)(),r=window.localStorage.getItem("graphiql:theme"),[t,a]=c().useState(r);if(c().useEffect(()=>{(0,d.Z)()&&r!==e&&(window.localStorage.setItem("graphiql:theme",e),a(e))},[e,r]),!x.isEnabled)return null;let i=`{
    transaction(
      hash: "${x.defaultTxHash}"
    ) {
      hash
      blockNumber
      value
      gasUsed
    }
  }`,n=(0,u.Z)("graphql"),p=(0,o.createGraphiQLFetcher)({url:n});return l.jsx(s.Box,{h:"100vh",overflowX:"scroll",sx:_,children:l.jsx(s.Box,{h:"100vh",minW:"900px",sx:_,children:l.jsx(h.GraphiQL,{fetcher:p,defaultQuery:i},t)})})};a()}catch(e){a(e)}})},52854:()=>{}};