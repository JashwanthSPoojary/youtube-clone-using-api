**Learnings 1**

1. create vite project
    
    a.https://vitejs.dev/guide/
    
    b. npm create vite@latest
    
2. react router dom
    1. React Router DOM is a library for React that helps you manage navigation and routing in web applications by mapping specific URLs to different React components.
    2. npm i react-router-dom
3. adding image in react ( 17 min ⇒ 2/3/24 )
    1. <img src={menu_icon} alt="" />
    2. import menu_icon from '../../assets/menu.png'
4. implement react router dom ( 1hr ⇒ 3/3/24 )
    1. using </BrowerRouter> in main.jsx
    2. using Routes and route  in App.jsx
    3. using LInk in Video.jsx

**Learnings 2**

1. use ternary operator and template literal 
    1. {`sidebar ${sidebar?"":"small-sidebar"}`}
    2. <div className={`container ${sidebar?"":'large-container'}`}>
2. CSS properties
    1. display: inline-flex ;
    2. flex basis : 69% ; 
    3. flex : 1 ;  ( eg it takes full space of after elements )
3. dynamic className
    1. <div className={`container ${sidebar?"":'large-container'}`}>
4. Use of Moment package 
    1. A JavaScript date library for parsing, validating, manipulating, and formatting dates.
    2. npm i moment
    3. eg :- {moment(item.snippet.publishedAt).fromNow()}
       
**Learnings 3**

1. use of useParams( ) hook 
    1. eg = const {videoId,categoryId} = useParams();
2. use of map() function 
