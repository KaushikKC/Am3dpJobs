import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import Card from './Card'
import "./MainContentJobs.css"

function MainContentJobs() {
  const [ActiveVar,SetActiveVar] = useState(false)
  const [JobList, setJobList] = useState([])
    // const dispatch = useDispatch()

    useEffect(() => {
        axios.get("http://localhost:3002/JobRead").then((response) => {
            console.log(response.data)
            setJobList(response.data)
        });
    },[]);

  const popup = () => {
    SetActiveVar(true);
  
  }

  const popdown = () => {
    SetActiveVar(false);
  }


  return (
    <div>
        <div className="row m-5">

    <div className="col-lg-3 d-nonec d-lg-block px-3">
      <nav className="sidenav sgds list-unstyled open2">
        <li className="sidenav-item backc">
          <button
            className="sgds btn collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExampleD"
            aria-expanded="false"
            aria-controls="collapseExampleD"
          >
            Category
            <i className="bi bi-chevron-down"></i>
          </button>
          <div
            className="collapse show"
            id="collapseExampleD"
            data-bs-parent=".open2"
          >
            <ul className="list-unstyled">
            <li>
                    <div class="form-check form-controlc shadow-sm px-5 my-3">
                      <input class="form-check-input" type="checkbox" value="" id="checkboxDefault" />
                      <label class="form-check-label" for="checkboxDefault">
                          Default
                      </label>
                  </div>
              </li>
              <li>
                <div class="form-check form-controlc shadow-sm px-5 my-3">
                      <input class="form-check-input" type="checkbox" value="" id="checkboxDefault" />
                      <label class="form-check-label" for="checkboxDefault">
                          Default
                      </label>
                  </div>
              </li>
              <li>
                <div class="form-check form-controlc shadow-sm px-5 my-3">
                      <input class="form-check-input" type="checkbox" value="" id="checkboxDefault" />
                      <label class="form-check-label" for="checkboxDefault">
                          Default
                      </label>
                  </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="sidenav-item backc">
          <button
            className="sgds btn collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExampleE"
            aria-expanded="false"
            aria-controls="collapseExampleE"
          >
            Tags
            <i className="bi bi-chevron-down"></i>
          </button>
          <div className="collapse" id="collapseExampleE" data-bs-parent=".open2">
            <ul className="list-unstyled">
            <li class="breadcrumb-item bread">
            <div class="sgds form-group mb-2">
                <div class="sgds form-control-group px-2 shadowc-sm rounded ">
                    <input type="text" class="form-controlc" placeholder="Search" autofocus />
                    <i class="bi bi-search form-control-icon"></i>
                </div>
              </div>
            </li>
            </ul>
          </div>
        </li>
        
      </nav>
    </div>
    <div class="col-lg-9">
      <nav class="sgds" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item bread">
            <div class="sgds form-group mb-2">
                <div class="sgds form-control-group px-2 shadowc-sm rounded ">
                    <input type="text" class="form-controlc" placeholder="Search" autofocus />
                    <i class="bi bi-search form-control-icon" style={{zIndex : '0'}}></i>
                </div>
              </div>
            </li>
          <li class="bread">
              <div class="sgds form-group mb-2"> 
                  <div class="sgds form-control-group px-2 shadowc-sm rounded">
                      <input style={{border:"0px"}} type="text" class="form-controlc" id="hoverWith" aria-describedby="hoverWithHelp" placeholder="Location" autofocus />
                      <i class="bi bi-geo-alt form-control-icon" style={{zIndex : '0'}}></i>
                  </div>
                </div>
            </li>
      
        </ol>
      </nav>
      <div className='shadow-smc'>
      {JobList.map((val,key) => {
        return(
          <div className=' sm_shadow'>
          <div className='p-3 relative' style={{borderBottom:"2px solid #E5E5E5"}}>
            <div className='d-flex flex-column w-fullc' style={{cursor:"pointer"}} onClick={popup}>
              <div className='d-flex w-fullc'>
                <div className='d-flex flex-column'>
                <h2 class="job-post-summary__title text-base">
                  {val.Title}
                </h2>
                <div class="flex-wrap text-xs font-semibold flex items-center leading-normal text-grey-darker"><span to="[object Object]" class="relative flex items-center mir-2 no-underline w-fullc mb-2 md:w-auto md:mb-0" style={{color:"inherit"}}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 18 18" class="mir-1 flex-no-shrink"><g transform="translate(-1201.5 -1207)"><rect width="18" height="18" transform="translate(1201.5 1207)" fill="none"></rect><path d="M15.722,17.5V3.278A1.778,1.778,0,0,0,13.944,1.5H5.056A1.778,1.778,0,0,0,3.278,3.278V17.5m12.444,0H17.5m-1.778,0H11.278m-8,0H1.5m1.778,0H7.722M6.833,5.056h.889M6.833,8.611h.889m3.556-3.556h.889m-.889,3.556h.889M7.722,17.5V13.056a.889.889,0,0,1,.889-.889h1.778a.889.889,0,0,1,.889.889V17.5m-3.556,0h3.556" transform="translate(1201 1206.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg> 
                {val.CompanyName}
                  </span><span locations="Washington, District of Columbia, United States" remote-locations="" class="flex w-full mb-2 mir-2 md:w-auto md:mb-0"><span class="flex flex-shrink items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18.187" viewBox="0 0 18 18.187" class="mir-1 flex-no-shrink"><g transform="translate(-1243 -1207)"><rect width="18" height="18" transform="translate(1243 1207)" fill="none"></rect><g transform="translate(1243.667 1206.5)"><path d="M13.283,13.427,9.818,16.886a2.1,2.1,0,0,1-2.968,0L3.384,13.427a6.993,6.993,0,1,1,9.9,0Z" transform="translate(0 0)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.75,8.287a2.625,2.625,0,1,1-2.625-2.62A2.623,2.623,0,0,1,10.75,8.287Z" transform="translate(0.208 0.2)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></g></svg>
                   {val.Location}</span></span></div>
              </div>
              
              <div class="mb-auto d-flex pin-t pir-4 sm:pt-0 sm:pir-0 sm:relative ml-auto flex items-center flex-row align-items-end sm:flex-row flex-no-shrink pin-r">
                <span class="job-post__date text-xs sm:font-bold italic" style={{marginRight:"10px"}}>
                  13 hours ago
              </span><div class="job-post-summary__apply mil-2 hidden sm_block"><object class="job-post-object flex flex-1"><button class="
                jb-btn 
                no-underline 
                flex 
                items-center 
                font-semibold 
                justify-center 
                relative 
                cursor-pointer
              whitespace-no-wrap
               relative w-full jb-btn--x-small text-xs px-3 rounded border" style={{color:"#00ACD8", borderColor:"#00ACD8"}}><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
                Apply
              </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div></div>
              </div>
              <div class="job-post-summary__tags hidden flex-no-shrink sm:flex flex-wrap"><span class="jb__tag text-xs mir-2 px-2 py-1 my-1 rounded no-underline inline-flex items-center text-grey-darker cursor-pointer uppercase tooltipped-n tooltipped-no-delay tooltipped" aria-label="+ Add Filter"><span>
              {val.JobFunction}
            </span></span><span class="jb__tag text-xs mir-2 px-2 py-1 my-1 rounded no-underline inline-flex items-center text-grey-darker cursor-pointer uppercase tooltipped-n tooltipped-no-delay tooltipped" aria-label="+ Add Filter"><span>
              {val.JobMode}
            </span></span><span class="jb__tag text-xs mir-2 px-2 py-1 my-1 rounded no-underline inline-flex items-center text-grey-darker cursor-pointer uppercase tooltipped-n tooltipped-no-delay tooltipped" aria-label="+ Add Filter"><span>
              {val.JobSpecialisation}
            </span></span></div>  
            </div>
          </div>
          <div class="p-3 sm_hidden border-t"><object class="flex flex-1"><button class="
            jb-btn 
            no-underline 
            flex 
            items-center 
            font-semibold 
            justify-center 
            relative 
            cursor-pointer
          whitespace-no-wrap relative w-fullc jb-btn--x-small text-xs px-3 rounded border" style={{color: "rgb(0, 172, 216)", borderColor: "rgb(0, 172, 216)"}}><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
          Apply
        </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div>
        </div>
        )
      })}
      </div>
      
      </div>
    </div>
    <div className='product'>
        <div class={`popup-view ${ActiveVar ? 'active': ''}`}>
          <div class="popup-card">
            <a><i class="fas fa-times close-btn" onClick={popdown}></i></a>
            <div class="product-img">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBUVExcVFRUXGBcZGhkaGhoaFxwYHxocIRoaHBwZHBwaHysjGhwoHxoXJDUkKCwuMjIyGiE3PDcxOysxMi4BCwsLDw4PHRERHTEpISgxMTE0MzExMTExMTE0MTExMTExMTMxMTMxMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAKMBNgMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEIQAAIBAgQDBAgDBQcEAwEAAAECEQADBBIhMQVBUSJhcYEGEzKRobHB0UJy8CNSYrLhBxQVgpKi8TNDwuIkY9Kz/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEAQAFBv/EAC8RAAICAQMCBQMDBAMAAAAAAAABAhEDEiExBEETIjJRYXGBoZGx8CNCUsEFFOH/2gAMAwEAAhEDEQA/APIudM8wdCogEGAJ6c6WgjWf1rU+BQOxUk66g9/6+VJktrK0avWyp7Qimno+2jjvB+/0pdii2bKxmOu/vjWjOAt2/EEfX6GgnvAKPJ1xuAQDMMOUHbuP3rnhpEBSZDBl5jXfnzgmjeM2cyrpzjeOR7u6POlgQoCealWg6dZ20gwKGNOFGvky9hIkqdVnbQyPD+las3iwIYyRpPdy+Pzo3iA0Drzgz3foilo7L9x09/2PyrYvUtw3SdotPDLvssSBK6yQOWu/fU2N4alyFcFd4I0ifhSzhBzWoI2LKfA7/OosVh7uHIyl0O+UzlI3DANuNvfUbx+fZ0x0W9ND27Zm6T+X+Vaa4CxrUXB73rLSXIHMERzEk/OPKnXC7M15XVZGrTPTw0oWb4gxt4e443VDHcToPiRVEtKQGkQgUwerQP616Px61lwzgAEtAAO24P0qjcVwrIqZiCTMgHbQazGtH0UqjT5bFylrTkuwitIZkEg7gjQjvBr1TAy9q2ze0yIT4lRNUHDYYRtXp/DsrW0ZRAKrA6CBp5bU3qpeJSXYVfhqxbewg6UFd4fOq6VartsFdqAuYfpUslKGzNh1CkVPF2MujA7/AK1oHifCzetjKqJ6tXaZkvABIOXQbcyT3VbsZhJ3Ejw+nOq7j8K9u2y22hWDT2yuWVIIGhI6gTE0zDNp7OmOtTjRQrdnMQJAnmdh4xRnD7KnMzqWQSshZUHQknmNIgx1rDhSrLnhJ66nxga049GbSRcAMa5gW7MrAEwGI0IPWvXyZEoNkMcWqVCPG8JG9ppB1AJkHwb70mK608sDLegMSGZj0kQSCR1O/n3UlxOjt+Y/M1Rib4bslyJI6QVMq6UNhzqaMUV09mFjVgD71grsoWaACfCjcLwxmEllA7zJ9w0+NG5JLcBQlJ7ICUVsaGmicNA3JPw/rU1zCqmmUT1BmlPNHsULp5VuKwHY845VsWDJJjWjXaBQd/Er+9PhrWxlKXCAnGMeXudqg5T762g121oQY0jYe+uL2NZuYHgI/rReHJinlihkWA3MVBdxijnPhSstPfWqJYV3FvPLsHHHkeyPfXD4x2/FHhpQ5WugKLTFdgdUnyzZMnUk+OtarYrK0yjCN66w75WDdD8OdZUdcGNeI2jIYAnTWBO36+FR8LuZbq9CY99TYIuEzqwIAMq08t417qCvPmJaI1nfnvS62oMsXEUBSCOY5xGu+nQTSi8sM6lm9kgZo6g789ulWXFYcFCOoM0ix1sOQ2s5QTAGxG8EieexpGKQTRJgBNoo2pUcteyRI+BPuoLG4dQoKtOsHqPH4UXw98t1NdHRV1/KIPwjzrfFEhtdiI/XkZ8qK6n9QkrR36PvOYdQD5jQ/MHzqzYgvesGyST2cyD+JAfd2SenfNVHgj5boU89PPaP10q14JXLDIYYGRIkfDX3CpepVS1fco6d70+4F6GYjtm0To2o8do/XWvSuD4KFmvLcfbe1fFyApJzjKZG5zAa6azvqK9e9G7wu2UddmAPnzqTqMKyTjJcP9xuXI8cGjnjNjNZKxMldN516c6p/pBwx4UmBvAJ1M+H1r0nJyNUb+0kFXt5NJUyBz7VMy9G4VOL42EdJ1Gp6PfcS4DhjBdQf13004et22wCscvQ6j3Hbyim3oGfWWWzDYgfOnr4RP3RQw6TLkjqTQzL1cYycHEBwuKZhDJHeNv6VMLU0SlsCpNKrj0UpLzu2efLMr8qoV4xIU1U+KO+Qsq6jyq/XLQI2pRxfCAoygCSDUPU9N4LT7FvS9Qn5TyrGMVukux7MKD5GNvChLgzZZYydTJ0M6jQ9NCfKrFxHCi4AHGUm4FYg6SQdYI00Uk8teW1IruGJkxmGmkbd1V4pppMZlj5tgLC2yt5Ad5b+VqCx1jtMdtTp01NMcPJu22becpnqBE+YI9xrrGWQzMDpqdfOqVPTL7f7JnG1sJsLlVu2CR3U6s+p3ADDv1juKk60svpDR3kVEU6Uclr3ujMeTw9qTHV1rcGNPD2fdoRS65igG0aT3UuuLXKVscKXezZdQ5cKiwWeMELlAPa31gHyG9BY/FvyMDuH3qG2uk1PxG32Qe4UChGMtkG5znB2xU7E7knx1riuyK1FVIhaOKyK6isArbBo5itgV2LZ6UXhsAz/asc0uQ4Y5SdJAcbVij6UXi8LkIDdJ+n2qGRyArFJNbGyg4umaArKa2+HvAYWnKsJBFtiDtqDlg+VZQ6n7MLSvdCwio3FS1G9ajhhwu+yATOQzPZke8CucWUZxkjKSNhHwozAT/dz4P9RQFgdtfzr8xS7WphVsi3X3gT3faoeHKTaT2SMi6GRyHPWfdRmPSViq0mCuRnQuOyslYjRRr7QMeRqaKUlzQwYthEIZ8kFGAXoBO0DSi+J4EO6oIEgwO8bxvOh2pOcc6hFkMHgsSDM5jqNvjVgucSS3eDXA0KusCfb0Gk6RBnxoZqaa78hRK9jOF3bbBwjkCCDlO46xVhsOQFcDTRtuW/yNMrPFMPc0S4snkxyH3NE1OMPIpOXLJqpIZDZ2gbG8M9dh7joe3aIuZdyyPAYgz+Einn9k3EBD2GP8SfUe74LQGEwzoS1u4VJUqQQHUqRBUhuRoTgvDr2HvpcQqQG5GNOYIPLwmsxZIqvgbkrJGSffg9SumkXpnaU2GaO0CoB5gE6gHlT29Sz0it5sO4/L/MK9Hqa8Ft+x5fTOsq+pz6JYZUw6kDVpzHrDMB8KZslC+j8DDpJgDNv+Y1HjONWk2OY933pePNDHhi5NLZBZcc55ZaVe7DClayUlb0hJ9m3p1Jge86V3huPg+2qjwdT8jHxrl12Furf6GvpMqXH5HSLQvFMPIojB4lLglGB6jmPGlnH8W638MgWVuNDGOQjTzn4VnVacmLbewMUZRn7M899JrIm7r+EaROodYEef17iux1xkW3cVMwuIrkCdDqHiBycH3irFx/h9xL1/1rq6ECJJBCF1KsUUDTslZE9o+MLsRhWtrcstq1hw6E/itP2SdOjBJ6EtXnw8iUZb0etJ6o2u5XsfiUztEhlHxBmQRodDtWr65gQPxjfxms4jjEbUjKxjcGehAYaDnv31y9km1lmSq5geZ0I9+YVYlSXYnvcGv2NO0NdPl/zQTpE/rrR9hwye1JgTrNQXkg0yLadMVJJqxcBp3zHyqKNdanvDK/nPgaJsOrghlE6wduU/Tr5VTdKxVXsawWulPMHwl71sZWtrBIzXLiIP8Ac0nyBpVw7Cy4CnNGpiCY84nzirJxH0eRkU2izs4gFnRQDAkFQCVIJ1Bb31JlnFSW9FmKEnB0iu4/gD2yRmR41Pq3zx3kgUF/hzVvA32TtKSCNdCQY0GkeO1McNeL2yWMnNz56Dfv1pzlOPyJUIT7UKmw4U9ofGuHcbA0Tjkpe1MhurYiezonF5QNFJPUn6Vv/EGAgQPL70Kakv2WRirqVYbgiCNJGh7iD50elPkHxJLh0TX7jOAxkmAJ3mDPlodq4VD05/etWLpWOmv6jzotCddPr137qzh0Y9023ucJxXEwFGIvKqiFX1rgKOigGFG2g6VqoLllpkjeso7FUjCK5uV21cXKBFI24TjMoCPHqyDuu5J8NRqajuZTeGSMuZYjbcUUumGHeB/N/WgsKO0v5h/MKTs22g62Lvi00jvpdhUb1WVQSzW2IG8iANP9Q3pti0kH9dKQ4RbyAOjqYtgBXB27MwVMycoNSx4GIWPYbPaQiGiI78x/pTz+7W7wllOygmSDKyPeJO/WgbFw3MRYZhBOpHgz/arVicZhQclw5HG5KMFM6iHAjaPlXZpSVVz8BRRSMThFUOIJi4VBO8DMI+VXM3H9Sch19WcvccukVXeO2kWPVsrBi7Eq+cTpznTfarJg0zWkjcovxUUOaVxTYajQv4dxTFg5WUN1zrkP+odn4U5wPEyz+re2yOe8MNRIM6SD3Vu0joWzqRKtBGomO761llM2JtaR2EHuUj6VJKab4KtMWro9IvCl/G76raKE9phoPMGaL4vf9WhbnyHU1Sr95iWdiSYqv/kOq0R8OPLX4PO6PpnOWt8ICxGNf2AxyiecKup17vrQ9zFiI372HyXb3z5UE2KzMEfYzqOR5E93KuHlTBqGOPues9kTviiTqSe861v+8HqffQe5qZT5fGqIQSEZJMNsY+4hDI7Ajz/rVnHFje/uzqVW5auN6wT+DIZaOakaHoT4GqcI/e+X2p76G2w2JVXhlZXH+06EeE05JpVHaySdeqXax76cYZbuEN8RKLPtRKMRmTMDoZ0nxjU1VFxCYhbbZiz281u40QWtHQs3QxleOqsBVhfF3MLnwyFMzOnqjcnICXGjZdcpGwHP81JLE4W+jMItupnmogkXFBI2RgXH8JfrSs3nprnv9eGvuMw+VOPK7fRlH4vhMl1rbjWWH+YaMB4xPu61Dgr2VlDHfTzHTuMA+dXD084VN4Robiyhn8awI8wFHiZqlOSVzTEakRsR7Q7hEHr7qowzWTGgJqtw25YEMy9kMSYEaageUwT50NiF7X66UUSCA+4Ya+MaH9dB0qG7r8KKwK2aF+KtaE9NaFwmhBO0ifcRTO4kgjqIoM2goI55vLQD460+EtmhUluNLWCTMPVPJaI7UFSDqDpsatnCWcKgbUqSQD36nbQzVHwNySTGiAsQDvJCifAsD5VdMHi3s2rj3VYRIyuCDOgAOhI1K6kaAzXn9ZCdJLf9y7pprcouGwhPrAFnLJJmIVZDfMHyovhfDDdsOVIzrnYgmBlCjbT2iZ50RwbHKl29mU5bgYQNYkz50R6Kocl1NmjbfQg/qary5JKLftQnHGLkl72VyIRW3BJEeEH60Nd0JFEFZtzyHz5fDNXGIt6zVS5JJr2BpovinEGvNmYAGFBIG+W3btyfK2D4k0OFrfgKOwNNkag03QkWmIGuUeXaUH5/Gluo6UzwyE2XHPKfg6t8gaCb3QSWzsXm6ZrKltYFzrp/qFZW2hdEJri5XRri5XIcWPhrJdtC3qCqiSRz5Ad2hpdbTLcAmYeP94rd60FVSuZSYkgkcprjD+0viP5hSUuWuAz0HELof1zFI3B9UANT6sGAZOx5b8j7qf4gdlv10qs4LHvbAc2yyZLequBGkzE8y0eQqWKsYiLgonEYaejfA3PsKtzMCxWddfksfM1WeFP6zF2GA3F0xpp/1N4qz3LuEJKtdRLg0YM2SD56HSKX1Ctr6f7DiUzErp4vc/8AGrfw1T6m3Bg+rTXp2RrVe41h0QqEIKksZDZhrl2I8KtHBl/Y2/yL8hWZZXFFHZE1kXvxurgTumUx/l0o/hmEJvo0dPkfvU1rDkSCNxT3g2HGYHpHyqDzSyxiu7CyTUMbYZxjDZx4SaqXEsPAK9Z5T4mrnefWkPFre8cxFW/8lhSayL7kPQ5tL0s8/wAdgyJ2P70dOUVxh7vrFysAWA13mO7vFOOI2soJilItLbm5uzDsD90Hcnv5D31PhyWtz1pq0DuSpj9HvrnOa0WJ1Yz9KyKqiyWSOTdM6U04VjzbdLiGGUzE6HTUR0Imlnqq6ZGA6imInkXz0vP97wiXbD5GLKpkhY19ljIykNBnnoa89wuHuevCM4YgK2YFmgMgYbxyYSCK4xHFLyo1oMFRypYdSswdZg68vpTl+HeswD4i64Vrty2Q5gdhTlGgGhJA5chXSdO33/c6HljSJcbcutZS0+VlSAjQQwgRvOumnupHe4Rde6WCAq51IIIzTo5XTQnUjozVFh8UyXUX1jsrTILSNjG+0H5Uxs8Xu27624tsjOoEg5gGYCSQY0npQwhKD2oyUnQsw+FdZtFWmC6ymWIaMm2+WD4GaiZNPI1ZcNxwtcCNbKhr6iQ+YLlFtcxGntAHlI2mkmJSHYdGI+Jp0bbdoW2Krm3u+dAX7nbjbX5DXz0phiVhiPD70rzaz40zGZMMwIEXDO6xlPOeQ8Kvlu817hl9yoLowYkamctnORp2R2WPl3VRcNbJQkA6Sdv4TXpP9kZHq7iMye1IQupdhEOck5oBgmRHSaT1Ftalu00Mj5Y2eXg5YPSPgI91d4a8RczBjsvdl8x0NWD064CMLfOTWzcLG2QZAgw1ueqnTwI5zVSxFuPL5VRBxmvqBJV5kGXI7SZSgidRsROo7iKHidjP9NPmPjWNiGMMTmBAGvKOX6612qrqI2kju5jyI08qOmhT3BzbIEfrnQ8a0wKbTQ9y2dBuaKMga3I1mIpxZQi045hQs97OoPnlL+6leHIDSeWtHi6zoUWQWZdZ2OoG35j76yV2jWtmHYIMFgMfdWUsxPYyvqc+YwTGWCJA7tR7qyupg2v5YCa4uVIa5iWA6x86NBsfcQw5KjKJAkmOXZNLbW48vnRS3nw6lYUh5O56AcxQ1rcf5fnSEml8DLPREB9Wc28a1VL15VsKGjVE0mCdF2q4OOyap+ExFlGzXBrktgShIjIuoIG9T4/oGmE+jQBv2CNslzQmTvcHQd9WhLKXCVYAx3d3f4VWvR0D+8W4Onq7hGkaesP3jyp5ltySlwZpIIDjfmI5a8qXnXm/nuHEqxWETlOY/KrrwL/oW/yiqjxS0EKqswATqZ51a+At+wt/lPzNBm3iVdkOeHNcntXCwHVV+YirRwptf10qr4NWEiRrVg4OSG1iD9qjwtxzxfyL6lKWNh13ehsbh8yyN6LvprXANfQZcUcsHFnjwm4u0UriNkk67Dl1pDixJJPhXouPwCMpMQapnFsIEJivnsmKWCWmR73TZ45VtyV90iulFS4ih9ToKfjlZuWNEgPIUXh7ZOkHwAqCxhjuduv2plhrDDWYX90c+g76oUqJJKwW5w0MwkCdQdR05/D307xN4JgMmRT6plWG2KkmD8T7qDxFiWBMSeU5Qvd/XnReLsq2GvkmF/ZjNyGpP68ayTUgVGjzy+Iu22AgZgY6AtHvphxA283azrKnMQJk8o6CBr4UJjMoiDmgmD4MD9TRnELJZgFjM2ijmT0H+qnJp0dONKxXhb+VkaSQtwEabyGAmSOgp7xe3lv3Rt2z8TI+dIUwzqCMpzqR2YzahxO06gTtTzjmJnEZYOZrdq5/sVSPGRTe+wiQkxY18h9KX2dx4H5b0wxB0npNL7O66Trr3yK6HAU+RhZb9ncnkP18qAXFvbuZrbMjDYqxUjuBBkVZ+HYNlwVxyilLjwDngwkltMpBEB+f4TVOuNLGuwtNy+GMlcYouPofxBLttsDfYC3cOay5/wCze/Ce5G9k+PKSarvE8I1u69l1KsrFSp5Ecu/uPPShLZq0f2iCcZbfMresw+HbMpzAn1YQkHmJWmVVsG/yVK3zU+MfMDy1HeBXagwDzGx6rOnx+YqW3dCvqJEr5a70b6uy07owYrHJjpI5+W1G5e6E6SILmAI5jTwjbyj4UNiQJppg7QRtHDAidPjt4fOld1O035qyNVZkgdj0A05bbVNZuxEROv4tRpOnjtUJGpqbCrqCDG/0+9E6ozkzEhrhBA0CqAApMaSRt+8W1rKd4ONDO6j7fSsrNYOkrt4dph3n51rD+2v5l+dbviGb8x+Zrm08OD0IPu1o+wY44/8Ag8D9PtQdnfzX50ecZbuWTny54MdRqYj4Uvw51HiPmKRFNRp9g+WemH2SPGqXjVPqVAI2TchdlPNiBVxDSPfVVw1lLluLh2MDWNlEfM1NDbcNEvousXU20tPsQf8AuDp40TxDCIS5yJMM05RJ359aC9FG/aIf/pb/APqKY4q3My24I8jP3rsrqfIcCvgwiD+E/wA7Vc/Rx5w9v/N/O1U3iSBGVQZhf/NjVo9F3/8Ajp4v/O1ZmVxsfq2D8L6QSWBtHSRo+viBlqzejXEBe1UZQhEyRsIOkeNU/iM+1AAVW8fZ8KZf2eXwUuSfxfRSflUcopeYZPTKGxfzi9eq9efhHWsS4rbUjOIkiYEmAOv36e80SLuXProqnnz5nrvPup+Pq5rnghn0se3I0QA85qqek+GKs09xHeP0D7qd4C7mdB1WY+B374qXHYX1iw22XQ8xoNe/WZFd1Mv+xBNLdG4P6GTfg8qxTRNSYQaTEzz107h186N4hw1lvMj6ZdfEco7jTC1ZVYzBO8kCNp86TDZF+WSYLZdiQMsd9GWrLA5iQYGgPz3+9S3US2PWZQv7oIg+MDn8qDwq3cQ+W2p13MkKO8n9TTEyd0QXhcJjQk7EBjPcABVgx2GjhpVPa/Fy7eaGB8CMvlUnFOEW7GCuGc7lVl/F19noKE4BfuX8E6MUX1bMjaFi8BXzTmEEknka57C71K12Z5zxGw4X2ds0wRzM1Bxy+TbtMOafRTU+I4mxlSi9rMPaIjU/b40HxBpwts7wcvwYfSrsceLAnNtB2MZTnX+Nu/dQdvdReICt6q4NTkKA67B2jTwIpNjbxznnqsamNVB1E/KmeBuZrKGAACwgTGoU8yT8a7TVMU3sBXdyO81vgPDhedQzi2gILOxGg5xO7bACsve0fE/WlbuZPcT8zXRi2mk6DtKmy4em3GLSWxhsMWyAZYLFsq8y07O3TkJmCxAo6iuiRWgKZjxrHGkY5amdrTbjmqYRv/oA8xevA0qBpvxgThcE3dfX3Xc3/ma3uEuGJcYPl9f+KIxBgs38dtx/mQt9KivLIbun6faiUQtbBAJlUGgnVc6/KKK9hT9Qe2GyO/QHl0kmT7zQaiQT1JP0+lF3rpLW2J/6mUHyt2wfOWb4UNbSEA7hS42luFOnVAGItnMYrVhoI3pn/fCttrWVCrSZIBKkiJBiRsOdcYbE21tXA9vMz6Iw0yGDrHMajTupm9C9R3ZxBWAQdiNdCO0dIPiKyouFJnVtHIDctSJGmnTQ/o1uu0g6xVcOpPefnUvDRN1I6/Ss/ujwDlMHUaj71xh2Nt5I1E6T3f1o3TTSCDuL/wDUA6KB8T96gsa+8fSjMW1trWfs+sIUnXWdJ0oLDn5j6UpekPuejYRFVQoqncWfKiZSQTlmGI/D3GrTbuax31W2dWQhgpjNp4Egc9NhU2N07DCvRpiWUkkn1Y1JndzzPhUeIwq5HYZgQGac77xO0xXXo5qCYygW1jf95tJPOttfQiCRB0PfXStTdBRqhPiWPYkknLzM/iarZ6KP/wDHX8z/AMxqp8UgPA2AEe8mrJ6Jv+wj+M0WVXAJSJeMZkJ7TkMjmGywNG0EKDHnTH+z7tWrgmDn38k76UcbuFg0/hDAeEHf30Z6FX8uHu6wWaAd40WTHw86lkv6TKIytpIsXC8WWvktBRdj0A6jmdB3VPi+IK1rMMy+sKmDpoTm7v3WPnQXDMNC5QSWuGOR5HmN5giPDxEuPtiGIAK25CyY1UKix3e10+NS12GNrVYZh8QVxFgmQMkmNZJJfLp0018atHrwSojQpP1+VUK2rHEIQW7JurGpkKka78xv3VZuHXXN1JJj1YkTzIjzNOg9OyJ8sVLf4IOK4e3dupbcFWYNlYGCpU6rrvpl+21AYr0fvzpcRlnQksp06gA7d1F8TGXEWmmAHGvSVIInviT0phjLpTPJ5yunM7r7z8R545UrO32SFmG4HbJ/aubjATzA+ckeEGn2GCqAqKqqDsNBt4fGlOPxGUZ1nsnKw332O3iK1huICYk7x8NqllnlF0w/Ac42gv0nuj+6Xiy5gLYMGRJzAgco1Amqp6JY129blRVsMYYCJR8g103Ugga69kedl4shuYS6q5iTbIGhJkAnYCS2mwHhVS9FcSMO9yxcDZmVXAKlJ7Gqw0EaAxIExyiqFJzxOS5FwhTcSi4tASzAEAMQZ6+R2rjNOEI/df6/+1SXnADgMGlpPcenwrjArOHvDoZ+AP8A4mvWjx+hK2RY9u1PdbP+wf0plwdybBkyQ4MzO8jnSfFN7M/uWz/tifgKYcAcZLi67rznnPSikqiBY54jrhbR6Xro98Gqm3tN4n50+xd9yvq57AbNED2iImd9htS23w64+Z1WVkj2gDspmCRprvQ49rCYABz7vtWyK7v2ypKkaqSp8RpHvqQWSTAGtG3RsVbpEINOuI64DCnkLmJXziy31NLGwjAwdPGrBewrf4WmYRlxT9DAa0nTvWhlKNrcaotXaK2h9r8rfyn7inXoyoOGvt+O2EZd9Ju2kOnPRzvSdLJzEdVaNO6Y+FOPRNSExalT2rPZnSSty2+k7ns7DurZpOP6AR2kgPHPFqy37rXB15gj4RU2JWJ8f+Kgv2XNojK0rcnYjdP/AFqdmlQZg5VJBOswAfOQaHsgZ8sdejSW2sXlfJnzIVzEAxqDE/rUUs9H8Nbf1quAYtyuaNGjv571nDOLPZD+rVGLR7QLRE6iCOtDcPxb22ZlAZiNmBM69BHWip0JfJFwBwpfMzKIXad9dNPOsqPhd4IxkgAjqBz7/OsomYTYgtJgHoKFw+HPrCzQRrofhuIoU3TOpmpOHNDtmbQDme8fSsUdKYzVbNYgLnOyiR8h0qTDZJAzbmJHWRy5/rwqLFWSD2tySdP60ZwlIViNdYMDXKV1056xp40TaUbOXJaLXE7AM+sXTxOp5aDfQ+6kP93RnZ1aZBBCqee5mN67w95M7tmInLOgie45tfdp30JawiG5KOSSdivfJ1zdJpMYpXybYfhbqIvZYEQB+L8OnJZ/GKDxz2WAVFVSYkANmJkRlLIIHjTHA2nSZURyjKCTJ3M9AtdYnBklLkDsuGMEZoBnL0HkTWKSUv8A0MCxfD1chla6JA7LWHkQNZI0PlTXgmWzbZXLxmLT6m5AEDeU02NT4PipTMHnQkCYJidhB15amm3E8Yj2LkE/9Pn38x76XObezW38+DUV/HhWntNlf2TkuQcy6a5Y1B60fwkpb/ZKLqs7HKHQgzzGZlUfCi+JMBh8KsD/ALPKZm3HP3/Gt4y+Hx9j8z8+40qVONfX8DITaaZYOGIQ+ZtraO0aclyiQO/N9K4VY0IntWkPixNxp74InwpriMNFliBqwRem5E69/dSfFX5lgd7jE9YTQaflA99SUUXYHhHIuC5OrB2EkESbmX61aOHketUAR2Y7tD84mqhgrkW0JiDbPQ6i6x3O0gD41Y+D38162DuSFIMSJVj/AE8Qa3TuDPg16SGHkzAIfQDkRrqekmmvEreYETurajkf+CPcKG4vYzMveuXzKkbHSNGojOTaR9Jy6jvC6j4EH9Tj7g3tEUG6qmT7NxVVtj2gYjxUzSDGcKZ71wC9cSMhUK5VTKiYgzynbnT7i1kZJ17LNJ5wZza9xE++kmNuFrYeYKtkeCdY0DmPE6+HjQJtekpx0y0+jt7shZOix1OhjfrAqu+lGJZOIIqIjOyoVLluyyG4NMp5j6UV6M4mTGo1HedNOY7vjQHpniWS8XQS6kZZEgftMsRIEknx13rMCd6fqDkjU2yr8Q4WguvbNtEZbYuMQXaTAMe2B+Kt2OGKodUIhgpbTcFTpBY9SKc8Xw6XLzMrOHdMp1WIAA0030HdptSPji+pthkdzmYIO1GwPRQR7NelilKaVMiyxUZNC3E2WzsiKrFSABl1iPHSIG1cYJbgIMAggTly7fMERS/DYl1fONWBkTP3ozB46414MSBOeYED2Wn61XpaQjYe3MQEbUDLCESNeXaHUiT3mSJ2BkuH1WJBCTavw6qCOyZCtE6KJ0ieQ/dilPE8QhAgsSV05RqRz8DUd1WawlzMzBWCiSdBlM5dTA0GncKBcbnI449bK33MblXMiPbVXmOU5qhsX7itKFg0R2dzRnFkYOsscxtoZmTBmNTrtpQ6WSdwPH76x8q61W4yDadotf8AaEMO+IUYcJl9Wk5Iy5jJMRoTqJ76K4fwd7nC37MxeV/8uQqT/LVQs4Uq8Z7czzavTvRzjFtMG9liCxiMuompM8pRrT8v8FcWnH52X2vc8rbDAOV1BJAGnOdpG0zRHD8OLisSJjLGoAEzzjupnxPDH1udYI9YrxtIBUkA9dKgwE27L2zbktkhgY2meU7Gnxk5RTJ8iSlsR8ZwbgAZhcZ2UAqCWJymfaAPUeXTWuDgXt28xTIGDKJO5AYERJ1EHrTFeIXVYXLf7O4ECZimfQdxkTsJid/Ggb4xD+1dZgGLAZDAYliSFj+JvfXLXstq/JknGnfILwfiq2mcsCcyFIFwoYJBmQjTtXGC4hbS8biqqwuil3iYAPaBDSe0d4k9BFEnAyAGkgdLW3xFdrwu1zD7j/tZdNZ/EddqfriI0P8AjK/i72di5gFiZAEAdwieUb69STWU9PB7c7mOhtt9GrdF4sfn9AdD+P1RWUOs0Tg8MbgIBEgc+nL60MoEHWi+FHR9OQ+tFN0m0dEjv4hnILR5CjOFY9UBU8zMx3bClzKRuIrdka+Y+tY4pqjbY+xeHVrTurHXtSNNgfhvUHBLfaAB1hjPkRRURhm/IPiR963gUCMznQKux3kxp8DSU3oYV7jG4CEUbnmfrSjifEChCgnaY15k/bnRly82TNI8xMdx60o4uA1wEaglFHQiJPjqTS8UPNua3SNpxeN1JPjUlrjBJCsspoG7RmO6I93yqLjmHClSoUDXYR+tqAtnenqEGro7U0eg4LBpcVGYSIBUkkwI7MS2nKtXsLbQhk0I2I0IMRp0pPxPEuti2gPZgZonaNAT0+9E8IzAKXnXUD5b++o5JpXY1Pc9KtYhbdpAWMluepIAyydN/Z86U8Rtr2yIHZJyxzKMp22jL7ian9IsGxS3bSZCFT01K9ojbQofCar3EkIUn1iq5zkD1igmTIETM9phoOR7oljuU13OsJZhLQbdwqg+1p+2nbYdoHzp9wgw1q4DochA7u15TEbcxVVZ2Q2/2sxlkAloAXX8J0n4ij8Jx20lu2rG4WTKdFMaLGuYiNddN4PWjlFvdA2qouXGLoQ5wM0MQO6GJnbYDN767wjRbO+lw+4sV08jVW4px63d1S1cYRzIXU5p0bSO1PlXK+kFzULbtqWgdq5JkQZ0iNRPmaFwd2Cqqi0Y2wA7FgCsFyJmdASsct295pFbwqtbMaLckaQCB1AHMAFvKhsVxPF3Br6pcwyn1Yzaakbse/8ApS3EPiMhJuMqiTsqnY8gskxI21rHjbfKGQk4oa8BwPq3ADmS0AEaiBvp8aQekWNuXWdvV3FJhlBUgAhw+p6j6mpBZzatfJn+J/kYFEWMJY0Obcbwp195+u9FGMYO27ZspSlwhXZvML2diNmIiR+KNz1ENpS/EYAtbC51Yh5JM69lhrAOpmrrhsVYticrHfmNvAaddJ599EDiluewLQnQlrkNHuI7qZHNXpQqWJydtnmWI4QybMGJj8MAeZIodMHcVpAHOdZ0IIO3jXqz4yRoqd8DNP5SG5x40Lcx6k9sDuhdfDtCmLqp/wCILwR9ygYfhLXNJ1jv038PGm2G4M3qjZuEL2g0giZEjQT3n3VcrXErI1DOveFH0NaxPGEnS6DpqCCD4DeRWPPN/wBpiwx9yoYng4uFSbo7KhQABsJI6661NheC20IbNmjcZRqOhIX5U7fjET2k8oP/ADXP+MsdmBPiB9Kzxsn+IfhQ/wAhbd4VaJk5h4LHxIracOQaD1v+oD6UeeKueZ91c/4jc3z/AK61jnN9jVCK/uAGwZn8QHXMT9dKz/D50zN7/rR78Sfk4mec7cttTXK8RufvjXoSR8efdXKc/Y5wh7gw4WQIk6d5+9Z/hrciffRBx77l1H5j8xMiuv8AFXGua2e8sRHv38qLXP2B8OHuCDh7j8Z8wP8A812ME/7zHyX/APFbPH3OsrH8P/tFa/xm5+8fcJ9wotU/Yzw4e5oYJ+tz/Sv2rK4/xtv3z7v6Vut1yM8KJ5md6P4XsfEfKsrKun6SOHJxj/w+Fc4FZnu1rKyuXpNY74q0WFH8Ns/y13c1w+Y6koknr7VZWUqPof1N7ghun1ZE6TUlhAQkie0vzrKygNN8XEzOun1oG7h1AJj4n71uspkOEayw8M7VlCddB8qHxGIYXAJ68hWqypV6pfcYuw74LYU2S5EtO5JJ2brQtlBmAjYL8q1WUpcsqXCDC5zKZ5KNNOfKNvKmfD1B9fIBgaSAfxc53PjWVlB/aa/UT2fZ008NOY6VFirh115c9evWtVlI7jlwKMZdObZeX4V6+HfUPCBmYyTvyYrzA/CRWVlUw9DEz9aDLidqJYjXQsxHuJpRi+KXQ0B+Q/Cp594rKyuhyFLgaYRc7SxJ3/ERyPQ1tsKumh2O7E/M1qsrVyC+BY7kA7ajoK2p9rxFbrKf2Em2bQ+J+Vab61lZWAMjNw5o+go8WF0068zW6ysZqN27QOpE+OtR3dBpp/zWVlYcyK7uO+Pny6eVTPbGnfvqdfHrWVlGCcY5stwKug+O372/xoLFiGA69dT7zrWVlajHycrz8PpWH8Pf9qysogTlVknxrKysrjj/2Q==" alt=""/>
            </div>
            <div class="info">
              <h2>Director, Sustainability <span>13 hours ago</span><br/><span className='location'> Washington, District of Columbia, United States </span><br /><span> American Iron and Steel Institute</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <span class="price">Salery : $10000.00 /Aannum</span>
              
              <a href="/" class="add-wish">Apply</a>
              <a href="/" class="add-cart-btn">Request for  Voice Call</a>
              {/* <a href="/" class="add-wish">Add to Wishlist</a> */}
            </div>
          </div>
        </div>
    </div>
    {/* <Card active={ActiveVar}/> */}
    </div>
  )
}

export default MainContentJobs