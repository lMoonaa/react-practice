import styled from'styled-components';

export const HomeWrapper=styled.div `
overflow:hidden;
width:960px;
margin: 0 auto;

`;

export const HomeLeft=styled.div `
width:625px;
margin-left:15px;
padding-top:30px;
float:left;
.banner-img{
    eidth:625px;
    height:270px;
}
`;

export const HomeRight=styled.div `
width:280px;
float:right;

`;

export const TopicWrapper=styled.div `
padding:20px 0 10px 0;
overflow:hidden;
margin-left:-16px;
border-bottom:1px solid #bcbcbc;
`;

export const TopicItem=styled.div `
float:left;
margin-left:18px;
background:#f7f7f7;
height:32px;
line-height:32px;
font-size:14px;
padding-right:10px;
color:#000;
border:1px solid #dcdcdc;
border-radius:4px;
margin-bottom:10px;
.topic-pic{
    margin-right:10px;
    width:32px;
    height:32px;
    display:block;
    float:left;
    margin-right:10px;
}
`;

export const ListItem= styled.div `
padding :20px 0;
border-bottom:1px solid #dcdcdc;
overflow:hidden;
.pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:4px;
   
}
`;

export const ListInfo =styled.div `
width:500px;
float:left;
.title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
   
}
.desc{
    line-height:24px;
    font-size:14px;
    color:#999;
}
`;

export const RecommenWrapper=styled.div `
margin:30px 0;
width:280px;
`;

export const RecommenItem=styled.div `
width:280px;
height:50px;
background:url(${(props)=>props.imgUrl});
background-size:contain;
`;

export const WriteWrapper=styled.div `
width:278px;
border:1px solid #dcdcdc;
border-radius:3px;
height: 300px;
line-height:300px;
text-align:center;
`;

export const LoadMore=styled.div `
width:100%;
height:40px;
line-height:40px;
background:#a5a5a5;
text-align:center;
border-radius:20px;
color:#fff;
margin:30px 0;
cursor:pointer;
`;

export const BackTop=styled.div `
position:fixed;
width:60px;
height:60px;
line-height:60px;
text-align:center;
border:1px solid #ccc;
right:100px;
bottom:100px;
font-size:12px;
`;



