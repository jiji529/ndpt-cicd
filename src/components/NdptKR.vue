<template>
<body>
    <div class="wrap">
 <header>
            <h1 class="logo">NDPT</h1>
            <!--1227-->
            <div class="util" style="display: ;">
                <i class="ri-global-line"></i>
                <a href="/" class="on">KR</a>
                <a href="/en">EN</a>
            </div>
    </header>
        <section class="visual">
            <video id="video" muted="" loop="" playsinline="" autoplay="" video-playable-inline="" poster="">
                <source type="video/mp4" src="../assets/img/main.mp4?v=231220">
            </video>
            <div class="inner">
                <h2><span>News Data for Pre-Training</span></h2>
                
                <h1>AI 학습을 위한<br>뉴스 데이터 공급 서비스</h1>
                <h3>AI의 시작, NDPT가 함께 합니다.</h3>
                
                <p>AI의 기술력을 결정짓는 것은 데이터입니다.<br>
                    요구사항 정의부터 인공지능 학습용 데이터 구축, <br>
                    합법적인 이용 저작권이 확보된 양질의 뉴스 데이터 제공으로 <br>
                    인공지능 개발의 처음부터 끝까지 함께 하겠습니다.</p>

                <span class="scroll"></span>
            </div>
        </section>

        <section class="sec1 reveal">
            <div class="inner">
                <div class="sec-tit">성공적인 AI 서비스 구축을 위한 NDPT</div>
                <div class="sec-txt">NDPT는 고품질의 인공지능 학습용 뉴스 데이터를 제공합니다.</div>
                
                <div class="sec-box1">
                    <div class="box-li">
                        <div class="img"><img src="../assets/img/sec1-1.jpg"></div>
                        <div class="txt">
                            <div class="box1-num color2">01</div>
                            <div class="box1-tit">뉴스 데이터 국내 최대 보유</div>
                                            
                            <div class="box1-txt">25년간 3,000여 개 이상의 국내 언론 매체의 뉴스 데이터 <br>
                                26개 주요 언론사 80여 년간의 보도사진<br>
                                지상파 3사, 통신사, 종편 등 다수의 방송사 뉴스 데이터</div>
                        </div>
                    </div>
                    <div class="box-li">
                        <div class="img"><img src="../assets/img/sec1-2.jpg"></div>
                        <div class="txt">
                            <div class="box1-num color3">02</div>
                            <div class="box1-tit">한방에! 저작권 해결</div>
                            <div class="box1-txt">한국언론진흥재단의 공식 유통사로서 <br>
                                25년간의 뉴스 저작권 사업으로 확보된 <br>
                                합법적 뉴스 데이터</div>
                        </div>
                    </div>
                    <div class="box-li">
                        <div class="img"><img src="../assets/img/sec1-3.jpg"></div>
                        <div class="txt">
                            <div class="box1-num color4">03</div>
                            <div class="box1-tit">다양한 형태의 뉴스 데이터 보유</div>
                            
                            <div class="box1-txt">텍스트 형태의 지면/온라인 기사, <br>
                                보도사진 이미지, 방송 뉴스 동영상 데이터 보유</div>
                        </div>
                    </div>
                    <div class="box-li">
                        <div class="img"><img src="../assets/img/sec1-4.jpg"></div>
                        <div class="txt">
                            <div class="box1-num color1">04</div>
                            <div class="box1-tit">AI 학습에 최적화된 데이터 제공</div>
                            
                            <div class="box1-txt">대형 언어 모델(LLM), 대형 다중유형 모델(LMM) 및 소형 언어 모델(sLLM) 구축에 적합하게 가공된 맞춤형 뉴스 데이터 제공
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section class="sec2 reveal">
            <div class="inner">
                <div class="sec-tit">What we have</div>
                <div class="sec-txt">NDPT는 정확하고 믿을 수 있는, 초거대 데이터를 제공합니다.</div>
                
                <div class="count">
                    <div class="counter">{{totalCount}}</div>
                    <div class="count-txt">총 보유 데이터 {{checkDate}} 기준</div>
                </div>
                <div class="sec-box2">
                    <div class="box-li">
                        <div class="tit">뉴스 기사 수</div>
                        <div class="txt">{{newsNum}}</div>
                        <div class="sum">하루 평균 24만여개</div>
                    </div>
                    <div class="box-li">
                        <div class="tit">영상 데이터</div>
                        <div class="txt">{{videoNum}}</div>
                        <div class="sum">하루 평균 1,000여개</div>
                    </div>
                    <div class="box-li">
                        <div class="tit">보도 사진</div>
                        <div class="txt">{{pressPictureNum}}</div>
                        <div class="sum">하루 평균 700여개</div>
                    </div>
                    <div class="box-li">
                        <div class="tit">보도 자료 데이터</div>
                        <div class="txt">{{pressNum}}</div>
                        <div class="sum">하루 평균 200여개</div>
                    </div>
                    <div class="box-li">
                        <div class="tit">어절 수</div>
                        <div class="txt">{{clauseNum}}</div>
                    </div>
                    <div class="box-li">
                        <div class="tit">의미 문장 수</div>
                        <div class="txt">{{sentenceNum}}</div>
                    </div>
                    <div class="box-li">
                        <div class="tit">하루 생성 기사 수</div>
                        <div class="txt">24만</div>
                    </div>
                    <div class="box-li">
                        <div class="tit">영상 시간</div>
                        <div class="txt">{{videoTimeHour}}<span>시간</span></div>
                    </div>
                </div>
                <div class="sec-box22">
                    <div class="box-top">
                        <div class="tit">원천데이터를 정제/가공하여 <br>
                            원하는 형태로 <b>라벨링 데이터</b>를 제공합니다.</div>
                        <a class="btn" href="https://www.scrapmaster.co.kr/price/price.html?loc=media" target="_blank">파트너 언론사 확인하기<i class="ri-arrow-right-line"></i></a>
                    </div>
                    <div calss="txt"><img src="../assets/img/sec2-1.png?v=231220"></div>
                </div>

            </div>
        </section>


        <section class="sec3 reveal">
            <div class="inner">
                <div class="sec-tit">Why NDPT?</div>
                
                <div class="sec-txt">AI 시장의 확대로 전 세계는 AI 저작권 규범 마련 중에 있으며<br>
                    저작권이 해결되지 않은 데이터는 법률적 리스크가 있습니다. </div>

                <div class="sec-box3">
                    <div class="box-li">
                        <a href="https://www.yna.co.kr/view/AKR20231218096500005" target="_blank">
                            <div class="img"><img src="https://img9.yna.co.kr/etc/inner/KR/2023/12/18/AKR20231218096500005_01_i_P4.jpg"></div>
                            <div class="txt">
                                <div class="box-num">연합뉴스</div>
                                <div class="box-tit">신문협회 "생성형 AI 뉴스 학습·활용, 대가 지급 의무화해야"</div>
                            </div>
                        </a>
                    </div>                
                    <div class="box-li">
                        <a href="https://apnews.com/article/openai-chatgpt-associated-press-ap-f86f84c5bcc2f3b98074b38521f5f75a" target="_blank">
                            <div class="img"><img src="https://dims.apnews.com/dims4/default/35e4a2d/2147483647/strip/true/crop/5760x3838+0+1/resize/980x653!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F56%2F01%2F842934f9317db49d683317b7fbc3%2F3e68df5f764446588ad178914578d268"></div>
                            <div class="txt">
                                <div class="box-num">AP뉴스</div>
                                <div class="box-tit">ChatGPT-maker OpenAI signs deal with AP to license news stories</div>
                            </div>
                        </a>
                    </div>
                    <div class="box-li">
                        <a href="https://www.smarttoday.co.kr/news/articleView.html?idxno=29230" target="_blank">
                            <div class="img"><img src="https://cdn.smarttoday.co.kr/news/photo/202304/29230_22510_387.jpg"></div>
                            <div class="txt">
                                <div class="box-num">스마트투데이</div>
                                <div class="box-tit">생성AI 학습에 공개 데이터 막 써도 되나...소송전 이어질 듯</div>
                            </div>
                        </a>
                    </div>
                    <div class="box-li">
                        <a href="https://www.aitimes.com/news/articleView.html?idxno=152384" target="_blank">
                            <div class="img"><img src="https://cdn.aitimes.com/news/photo/202307/152384_162355_5556.jpg"></div>
                            <div class="txt">
                                <div class="box-num">AI타임스</div>
                                <div class="box-tit">오픈AI 이어 구글도 저작권법 소송..."수억 미국인 인터넷 데이터로 AI 학습"</div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="box3-tit">NDPT는 저작권이 해결된 안전한 데이터를 공급합니다.</div>
                
            </div>
        </section>



        <section class="sec4 reveal">
            <div class="inner">
                <div class="sec-tit">NDPT Process &amp; Resources</div>
                
                <div class="sec-txt">뉴스 원시데이터를 정제 및 가공한 원천데이터와 <br>
                    오토라벨링 기술을 통해 생성된 라벨링 데이터를 제공합니다. </div>

                <div class="sec-box4">
                    <img src="../assets/img/sec4-1.png">
                    <img src="../assets/img/sec4-2.png?v=231218">
                </div>
            </div>
        </section>


        <section class="sec5 reveal">
            <div class="inner">
                
                <p>양질의 뉴스 데이터를<br>
                    저작권 문제로부터 자유롭게 공급하며,<br>
                    AI 학습에 적합한<br>
                    데이터 기술력을 보유한 서비스는<br>
                    NDPT가 유일합니다.</p>
                <h1>AI의 시작, NDPT가 함께 합니다.</h1>

                <div class="we">
                    NDPT<br>
                    
                    is<br>
                    ready!</div>
            </div>
            <video id="video" muted="" loop="" playsinline="" autoplay="" video-playable-inline="" poster="">
                <source type="video/mp4" src="../assets/img/video2.mp4">
            </video>
        </section>



        <section class="sec6 reveal" id="call">
            <div class="inner">
                <div class="sec-tit">문의하기</div>
                

                <div class="sec-txt">아래에 궁금하신 내용을 작성해 주시면, 신속히 안내해 드리겠습니다.</div>
                <div class="call_box">
                    <dl>
                        <dt>성명</dt>
                        <dd>
                            <input type="text" id="commuName" v-model="name">
                        </dd>
                    </dl>
                    <dl>
                        <dt>전화번호</dt>
                        <dd>
                            <input type="text" class="num" id="Num" v-model="phone" oninput="this.value = this.value.replace(/[^0-9.]/g, '')">
                        </dd>
                    </dl>
                    <dl>
                        <dt>회사명</dt>
                        <dd>
                            <input type="text" class="comp" id="comp" v-model="comp">
                        </dd>
                    </dl>
                    <dl>
                        <dt>이메일</dt>
                        <dd>
                            <input type="text" class="mail" id="mail" v-model="email" oninput="this.value = this.value.replace(/[^0-9a-zA-Z@.]/g, '');">
                        </dd>
                    </dl>
                    <dl>
                        <dt class="main_cont">내용</dt>
                        <dd class="main_cont">
                            <textarea id="commuContents" v-model="contents"></textarea>
                        </dd>
                    </dl>
                </div>

                <div class="agree_box">
                    <strong>1. 개인정보 수집 항목 및 목적</strong><br>
                    다하미커뮤니케이션즈는 NDPT 홈페이지에서 문의하기를 통해 질문하신 내용에 대해 관리자가 문의자와 원활히 의사소통 하기 위한 목적으로 아래와 같은 항목을 수집합니다.<br>
                    : 성명, 전화번호, 회사명, 이메일 주소<br>
                    <br>
                    <strong>2. 개인정보의 보유 및 이용기간</strong><br>
                    : 수집된 개인정보는 보유 및 이용 목적이 완료된 후 즉시 파기됩니다. 또한 ‘문의하기’를 통해 삭제 요청을 하는 경우 3일 이내 파기됩니다.<br>
                    <br>
                    ※ 귀하는 이에 대한 동의를 거부할 수 있으며, 동의하지 않으실 경우 질문하기를 통한 이메일 발송은 불가능함을 알려드립니다.
                    <br>
                </div>
                <div class="agree_check">
                    <p>
                        <input id="agree" type="checkbox" v-model="chkflag">
                        <label for="agree">개인정보 수집 및 이용에 동의합니다.</label>
                    </p>
                </div>
                <div class="call_send" @click="emailSend">
                    <p class="btn">문의하기</p>
                </div>

            </div>
        </section>
        
        <footer>
            <div class="inner">
                
                <div class="f_top">
                    <div class="txt">사업자등록번호 : 112-81-49789 대표이사 : 박용립<br>
                        (주)다하미커뮤니케이션즈. 서울특별시 중구 마른내로 140, 5층 (쌍림동, 인쇄정보센터)<br>
                        5F, 140, Mareunnae-ro, Jung-gu, Seoul, Korea<br>
                        TEL. 02 593 4174 FAX. 02 593 4175 Email. dahamicommunications@dahami.com</div>
                    <div class="f_logo">
                        <span class="f_logo_img">dahami</span>
                        <span class="f_logo_slogan">모든 뉴스를 내 손안에, 다하미커뮤니케이션즈</span>
                    </div>
                </div>
                <div class="f_bottom">
                    <div class="f_copy">Copyright ⓒ DAHAMI Corp. All Rights Reserved.</div>
                </div>
                <div class="f_family">
                    <div class="f_tit">Family sites</div>
                    <div class="f_li"><a href="https://www.dahami.com" target="_blank" title="다하미커뮤니케이션즈">다하미커뮤니케이션즈</a></div>
                    <div class="f_li"><a href="http://www.scrapmaster.co.kr" target="_blank" title="스크랩마스터">스크랩마스터</a></div>
                    <div class="f_li"><a href="http://www.clippingon.co.kr" target="_blank" title="클리핑온">클리핑온</a></div>
                    <div class="f_li"><a href="http://www.t-paper.co.kr" target="_blank" title="티페이퍼">티페이퍼</a></div>
                    <div class="f_li"><a href="http://www.newsbank.co.kr" target="_blank" title="뉴스뱅크">뉴스뱅크</a></div>
                    <div class="f_li"><a href="http://news-plaza.com/" target="_blank" title="뉴스플라자">뉴스플라자</a></div>
                </div>
            </div>
        </footer>
    </div>
    <div class="float">
        <div class="float-li"><a href="#call"><i class="ri-headphone-line"></i></a></div>
        <div class="float-li"><a href="#"><i class="ri-arrow-up-line"></i></a></div>
    </div>
</body>    
</template>

<script>
import $ from 'jquery';

export default {
  name: 'NdptKR',
  props: {
    
  },
  data() {
    return {
        // 데이터 개수 카운트용 변수
        totalCount: "",
        checkDate: "",
        newsNum: "",
        newsNumPerDay: "",
        videoNum: "",
        videoNumPerDay: "",
        pressPictureNum: "",
        pressPictureNumPerDay: "",
        pressNum: "",
        pressNumPerDay: "",
        clauseNum: "",
        sentenceNum: "",
        ArticlePerDay: "",
        videoTimeHour: "",        
        // 메일전송용 변수
        name: "",
        phone: "",
        comp: "",
        email: "",
        contents: "", 
        chkflag: "",
    }
  },
  mounted() {    
    this.getNDPTData();
  },
  methods: {
    getNDPTData : function() {
        this.$axios.get("https://ndpt.dahami.com/api/dataCount.json")
            .then((res) => {                                   
            // 최상단 숫자 카운트
            this.totalCount = res.data.dataCount.articleInfo.totalCount.toLocaleString().toString();              
            // 날짜형식 변환
            this.checkDate = res.data.dataCount.checkDate.toString().substr(0,4) + "." 
            + res.data.dataCount.checkDate.toString().substr(4,2) + "." 
            + res.data.dataCount.checkDate.toString().substr(6,2) + ".";         
            // 억단위
            this.newsNum = parseInt(res.data.dataCount.articleInfo.totalCount / 100000000) + "억+";
            this.videoNum = parseInt(res.data.dataCount.articleInfo.ndptItem[1].totalCount / 10000) + "만";
            this.pressPictureNum = parseInt(res.data.dataCount.articleInfo.ndptItem[5].totalCount / 10000) + "만";
            this.pressNum = parseInt(res.data.dataCount.articleInfo.ndptItem[2].totalCount / 1000) / 10 + "만";
            this.clauseNum = parseInt(res.data.dataCount.analyzeInfo.clauseCount10000 * 10000 / 100000000) + "억";
            this.sentenceNum = parseInt(res.data.dataCount.analyzeInfo.sentenceCount10000 * 10000 / 100000000) + "억";
            this.videoTimeHour = parseInt(res.data.dataCount.analyzeInfo.videoTimeHour / 10000) + "만" 
            + parseInt(res.data.dataCount.analyzeInfo.videoTimeHour % 10000 / 1000) + "천";
            
            const observer = new IntersectionObserver((e) => {
                e.forEach(function(element) {
                    if (element.isIntersecting) {            	
                        if(element.target.className.indexOf("count")!=-1) {
                        $(".counter").text('0'); 
                            let countBox = document.querySelector('.counter');
                            let count = 0;
                            let num = res.data.dataCount.articleInfo.totalCount;

                            let counting = setInterval(function () {
                                if (count >= num) {
                                    count = num;
                                    clearInterval(counting);
                                } else {
                                    count += 12345678;
                                }
                                countBox.innerHTML = new Intl.NumberFormat().format(count);
                            }, 10);             		      	
                        }
                    }
                })
            });

            var div = document.querySelectorAll("div");
            div.forEach(function(element) {
                observer.observe(element);
            })     
        });
    },
    emailSend : function() {
        var email_regex =  /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

        if(this.chkflag  == false){
            alert("개인정보 수집에 동의 하여 주십시오");
            $('#agree').focus();
        }else if(this.name == ""){
            alert("성명을 기입하여 주십시오");
            $('#commuName').focus();
            return false;
        }else if(this.phone == ""){
            alert("연락처를 기입하여 주십시오");
            $('#Num').focus();
            return false;
        }else if(this.email == ""){
            alert("이메일을 기입하여 주십시오");
            $('#mail').focus();
            return false;
        }else if(this.comp == ""){
            alert("회사명을 기입하여 주십시오");
            $('#comp').focus();
            return false;
        }else if(this.contents == ""){
            alert("내용을 기입하여 주십시오");
            $('#commuContents').focus();
            return false;
        }else if(!email_regex.test(this.email)) {
            alert("이메일 형식이 올바르지 않습니다. 형식을 맞춰 다시 입력해주세요.");
            $('#mail').focus();
            return false;
        }
        else{
            this.$axios.get("/api/sendEmail", { params: {name: this.name,
                phone: this.phone,
                email: this.email,
                comp: this.comp,
                contents: this.contents}})
            .then((res) => {
                console.log(res);
                alert("메일전송 성공");
                this.name = "";
                this.phone = "";
                this.comp = "";
                this.email = "";
                this.contents = "";        
                this.chkflag = false;        
            }).catch(error => {
                alert("메일전송 실패");
                console.log(error.response);
            });
        }        
    }
  },
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
      } else {
          reveals[i].classList.remove("active");
      }
  }
}
window.addEventListener("scroll", reveal);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
