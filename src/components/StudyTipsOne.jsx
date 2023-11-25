import React from "react";
import { Link } from "react-router-dom";

const StudyTipsOne = () => {
  return (
    <>
        <body>
            <div class="container mt-5">
                <div class="row mt-5">    
                    <div class="col-md box">
                            <p>This video offers key tips and advice to help you develop effective study habits.</p>
                            <iframe width="400" height="200" src={`https://www.youtube.com/embed/${"YanXZQov-_0"}`} title="Study Skills-Effective Tips for Students" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <p>This can help you do away with distraction</p>
                    </div>
                    <div class="col-md box">
                        <p>These study strategies go beyond the basics</p>
                        <iframe width="400" height="200" src={`https://www.youtube.com/embed/${"Jd5B0rrehSA"}`} title="How to study smarter, not harder - study smatter not Harder" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p>This can help you improve your hours of studies</p>
                    </div>
                </div>        
                <div class="row mt-5">
                    <div class="col-md box box1">
                        <p>Ace any exam with these study tips! The Fast Learning Hacks That work</p>
                        <iframe width="400" height="200" src={`https://www.youtube.com/embed/${"p60rN9JEapg"}`} title="The 9 BEST Scientific Study Tips for exellence" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p>Loose focus easily?This might help</p>
                    </div>
                    <div class="col-md box box1">
                        <p>Explore how the brain learns and stores information,find out how to apply this for more effective study techniques</p>
                        <iframe width="400" height="200" src={`https://www.youtube.com/embed/${"6D3yzgMNjwU"}`} title="How to Study Effectively for Exams - The 6 BEST Study Tips to earn you good grades" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
                        <p>Improve in your Studies! Get good grades,make yourself Happy and Mummy proud!</p>
                    </div>
                </div>     
            </div>
        <script src="js/bootstrap.bundle.min.js"></script>
        </body> 
    </>
    );
};
export default StudyTipsOne;
