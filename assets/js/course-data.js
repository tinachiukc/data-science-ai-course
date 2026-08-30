window.COURSE_DATA = {
  course: {
    titleZh: "資料科學與大數據分析",
    titleEn: "Data Science & Big Data Analytics",
    subtitle: "從資料理解、分析判斷到 AI 協作的金融管理學習旅程"
  },
  modules: [
    {id:"m1", code:"M1", title:"Module 1", description:"建立資料科學、大數據與資料品質的共同語言。", weeks:[1,2]},
    {id:"m2", code:"M2", title:"Module 2", description:"從探索資料、描述統計到 AI 分析查核，完成第一個小型資料科學循環。", weeks:[3,4,5]},
    {id:"m3", code:"M3", title:"Module 3", description:"從金融／商管情境形成資料問題，找對資料，並讓問題、資料與分析方法對得起來。", weeks:[6,7,8]},
    {id:"m4", code:"M4", title:"Module 4", description:"從資料證據走向比較、管理意涵、權衡與有條件的金融決策。", weeks:[10,11,12]},
    {id:"m5", code:"M5", title:"Module 5", description:"管理 AI 協作、查核來源與證據，並完成負責任的資料溝通。", weeks:[13,14,15]}
  ],
  weeks: {
    "01": {
      module:"m1", title:"從資料開始", term:"資料科學、大數據與 AI 時代的金融決策",
      question:"有資料，就能做出好決策嗎？",
      goals:["用自己的話說明資料科學與大數據的基本意義","辨認金融與日常生活中常見的資料來源","區分『擁有資料』與『能利用資料支持決策』","說明生成式 AI 可協助什麼，以及為何仍需人工查核"],
      aiRole:"解說者：協助理解概念與情境，但不替學生做最後判斷。",
      human:["先理解 AI 回答，再確認哪些說法需要查核","根據情境與證據形成自己的判斷","不把 AI 的流暢回答直接當成事實"],
      materials:["slides","worksheet","plus"], form:"", colab:"", notebooklm:"", extra:""
    },
    "02": {
      module:"m1", title:"先看懂資料", term:"資料集、變數與資料品質",
      question:"拿到一份資料，我們第一件事應該做什麼？",
      goals:["辨認資料集中的觀察值與變數","區分類別資料與數值資料","閱讀金融／消費資料表並說明欄位意義","辨識遺漏、重複、不合理值與格式不一致","使用 AI 協助理解欄位並查核無根據補述"],
      aiRole:"資料理解助手：協助解釋欄位與可能意義，但不得補出資料中不存在的資訊。",
      human:["回到原始資料確認欄位、數值與資料品質","判斷變數在情境中的真正意義","指出 AI 是否自行補充未提供的資訊"],
      materials:["slides","worksheet","dataset"], form:"", colab:"", notebooklm:"", extra:""
    },
    "03": {
      module:"m2", title:"讓資料說話", term:"從整理到探索資料",
      question:"面對一份資料，怎麼找出『值得注意的現象』？",
      goals:["說明探索式資料分析（EDA）的基本目的","使用排序、篩選、分類與比較探索資料","從表格與簡單圖表辨認差異與可能異常","區分資料觀察與原因解釋","利用 AI 提出探索方向並檢查過度解釋"],
      aiRole:"資料探索助手：協助提出可由現有欄位回答的探索問題。",
      human:["確認探索問題真的能由現有資料回答","把『看到現象』與『解釋原因』分開","檢查圖表尺度與表達是否可能誤導"],
      materials:["slides","worksheet","dataset"], form:"", colab:"", notebooklm:"", extra:""
    },
    "04": {
      module:"m2", title:"數字會說話嗎？", term:"用描述統計看懂資料",
      question:"一個『平均數』，真的能代表一群人嗎？",
      goals:["理解平均數與中位數的直覺意義","辨認極端值如何影響統計摘要","比較不同摘要數字所呈現的資料樣貌","避免只憑單一數字做過度推論"],
      aiRole:"統計解讀助手：協助說明統計摘要，但學生必須確認數字是否真的能代表資料。",
      human:["檢查平均數、中位數等數字是否適合描述資料","注意極端值與資料分布對解讀的影響","不把描述統計直接寫成原因或因果"],
      materials:["slides","worksheet","dataset"], form:"", colab:"", notebooklm:"", extra:""
    },
    "05": {
      module:"m2", title:"AI 說得對嗎？", term:"資料分析結果的查核與驗證",
      question:"AI 給我一份看起來很專業的分析，我怎麼知道它是對的？",
      goals:["查核 AI 使用的資料與欄位","查核計算與分析結果","區分資料事實、分析結果、可能解釋與決策建議","修正 AI 的過度推論或無證據建議"],
      aiRole:"分析助手：可以提出分析與解釋，但必須接受『查資料、查計算、查解釋、查推論、查建議』五查。",
      human:["最後回到原始資料確認證據","辨認 AI 哪一句超過資料可以支持的範圍","完成自己的修正結論"],
      materials:["slides","worksheet","dataset"], form:"", colab:"", notebooklm:"", extra:""
    },
    "06": {
      module:"m3", title:"先問對問題", term:"從金融情境到資料問題",
      question:"一個金融／商管問題，要怎麼變成資料可以回答的問題？",
      goals:["把情境問題轉成可由資料處理的問題","確認問題的對象、期間、比較與指標","辨認『想問』與『資料能回答』之間的差距","開始承擔問題形成的決策責任"],
      aiRole:"問題形成伙伴：可以協助發想與改寫問題，但不能替學生決定資料究竟能證明什麼。",
      human:["決定真正值得問的問題","檢查問題是否清楚且可由資料回答","說明資料邊界與不能回答的部分"],
      materials:["slides","worksheet"], form:"", colab:"", notebooklm:"", extra:""
    },
    "07": {
      module:"m3", title:"找對資料", term:"從問題到變數與分析證據",
      question:"問題已經想好了，我需要哪些資料才能回答？",
      goals:["從資料問題辨認最低必要資料需求","說明變數在問題中的用途","區分有用資料與只是很多資料","辨識政府、金融公開資訊、市場與課程資料等來源"],
      aiRole:"資料需求顧問：協助列出可能資料與變數，但必須說清楚每項資料為何需要。",
      human:["判斷資料是否真的與問題匹配","確認資料來源、期間、定義與使用限制","避免因為資料容易取得就改變原本問題"],
      materials:["slides","worksheet","dataset"], form:"", colab:"", notebooklm:"", extra:""
    },
    "08": {
      module:"m3", title:"分析不是亂算", term:"讓問題、資料與方法對得起來",
      question:"我有問題、也有資料了，該怎麼分析才真的能回答問題？",
      goals:["根據問題選擇合適的簡單分析方式","判斷一個分析步驟是否真的有助於回答核心問題","避免為了『分析很多』而加入無關計算","建立問題—資料—方法的一致性"],
      aiRole:"分析方法建議者：可提出方法，但學生要判斷方法是否真的回答原問題。",
      human:["先說明分析目的再使用方法","刪除與問題無關的分析步驟","檢查 AI 是否只是在堆疊看似專業的計算"],
      materials:["slides","worksheet","dataset"], form:"", colab:"", notebooklm:"", extra:""
    },
    "09": {
      module:"special", type:"assessment", title:"期中評量", term:"從資料到判斷：你能相信這份分析嗎？",
      question:"不是背名詞，而是證明你能看懂資料、查核 AI、做出有證據的判斷。",
      goals:["整合資料理解、探索與描述統計能力","獨立查核 AI 分析中的資料、計算與推論","以證據說明自己的修正與判斷"],
      aiRole:"評量情境中的被查核對象；是否允許使用 AI 依正式評量規範執行。",
      human:["個人完成核心判斷與證據說明","清楚區分 AI 回答與自己的查核結果","遵守正式評量與學術誠信規範"],
      materials:["slides","worksheet"], form:"", colab:"", notebooklm:"", extra:""
    },
    "10": {
      module:"m4", title:"從資料到決策", term:"分析結果到底能告訴我們什麼？",
      question:"同一份分析結果，為什麼不一定只有一個決策？",
      goals:["區分資料證據、可能解釋與決策建議","使用『證據—決策橋』整理分析到決策的思考","理解決策準則與利害關係人如何影響選擇","使用 AI 決策查核四問檢查建議"],
      aiRole:"決策助手（Decision Assistant），但不是決策者。",
      human:["說清楚自己採用的決策目標與準則","指出還缺少哪些資訊，而不是證據不足時硬選","檢查 AI 使用了哪些證據、準則與隱含假設"],
      materials:["slides","worksheet"], form:"", colab:"", notebooklm:"", extra:""
    },
    "11": {
      module:"m4", title:"數字好不好，要跟誰比？", term:"Benchmark、比例與公平比較",
      question:"看到一個數字，我怎麼知道它算高、低、好或差？",
      goals:["理解 Benchmark 是判斷高低好壞所需的比較基準","在群體大小不同時注意分母與比例","依問題選擇合理比較對象","避免用單一絕對數字做不公平比較"],
      aiRole:"比較助手：協助提出可能 Benchmark，但必須說明比較基準是否公平、是否與問題匹配。",
      human:["先定義『表現好』的標準","確認分母、期間與比較群體一致","拒絕沒有 Benchmark 的高／低／好／差結論"],
      materials:["slides","worksheet","dataset"], form:"", colab:"", notebooklm:"", extra:""
    },
    "12": {
      module:"m4", title:"沒有完美答案", term:"風險、權衡與不確定性下的金融決策",
      question:"當沒有一個方案在所有方面都最好時，我們怎麼做決定？",
      goals:["理解 Benefit、Cost、Risk 與 Uncertainty 的權衡","辨認不同錯誤可能有不同代價","提出有條件的建議而不是絕對答案","說明決策成立的條件與限制"],
      aiRole:"思考伙伴與反方：先提出建議，再接受學生要求從反方指出風險、代價與未考慮因素。",
      human:["決定自己最重視的準則","判斷 AI 反方意見哪些有資料支持、哪些需要另查證","為最後的有條件建議負責"],
      materials:["slides","worksheet"], form:"", colab:"", notebooklm:"", extra:""
    },
    "13": {
      module:"m5", title:"AI 不是代做者", term:"從 AI 使用走向 AI 協作",
      question:"AI 可以每一步都幫忙，但哪些事情不能把決定權一起交出去？",
      goals:["建立人—AI 分工表","區分 AI 使用與 AI 協作","用清楚任務、資料、限制與輸出改善 Prompt","使用三個 AI Checkpoint 管理分析流程","建立可說明、可查核的 AI 協作紀錄"],
      aiRole:"協作者：可解釋、建議、整理與挑戰，但每一步都必須有人的確認。",
      human:["決定問題、資料、方法與最後結論","記錄 AI 做了什麼、自己做了什麼、改了什麼","在分析前、分析後與結論前完成 Checkpoint"],
      materials:["slides","worksheet"], form:"", colab:"", notebooklm:"", extra:""
    },
    "14": {
      module:"m5", title:"AI 說得有根據嗎？", term:"從來源到可信度查核",
      question:"AI 給我的資料、數字與說法，我怎麼知道它真的有根據？",
      goals:["使用來源查核五問檢查 AI 提供的來源","確認來源存在、權威、支持程度、情境與相關性","讓重要 Claim 可以回到可追溯證據","建立作品中的來源與查核紀錄"],
      aiRole:"資料與來源搜尋助手：可以提供線索，但不能把『看起來像來源』當成可信證據。",
      human:["親自打開並核對重要來源","確認年份、單位、對象與定義一致","判斷來源是否真的支持自己的 Claim"],
      materials:["slides","worksheet"], form:"", colab:"", notebooklm:"", extra:""
    },
    "15": {
      module:"m5", title:"把分析說清楚", term:"從資料結果到負責任的金融溝通",
      question:"分析做完了，我怎麼把結果說得清楚，又不把資料沒有證明的事情說得太滿？",
      goals:["理解資料溝通要同時做到清楚與準確","使用『結果—解釋—邊界』三句法","依受眾調整表達但不改變證據意思","使用圖表溝通四問避免視覺與語氣誤導","查核 AI 改寫是否偷偷加強語氣","完成 Week 16 五張核心投影片"],
      aiRole:"溝通助手（Communication Assistant）＋批判者（Critic）。",
      human:["保留重要數字、限制與不確定性","拒絕 AI 把『同時發生』改成『造成』或把普通差異寫成『大幅』","完成最終修訂與發表內容，而不是把 AI 改寫原封不動提交"],
      materials:["slides","worksheet"], form:"", colab:"", notebooklm:"", extra:""
    },
    "16": {
      module:"special", type:"showcase", title:"金融 × 資料 × AI", term:"學生作品成果發表",
      question:"用資料與 AI，提出有證據、有邊界、說得清楚的金融／商管判斷。",
      goals:["清楚呈現問題、資料、分析與結果","使用 Benchmark、管理意涵與限制完成判斷","揭露並說明 AI 協作與查核流程","以負責任方式完成成果發表"],
      aiRole:"作品歷程中的協作者；發表重點不是 AI 有多厲害，而是學生如何管理、查核並為分析負責。",
      human:["每位成員都能說明作品在做什麼","重要數字、圖表與 Claim 可追溯","明確揭露 AI 協助、人的查核與未採用建議","最後結論與表達由學生／小組負責"],
      materials:["slides","worksheet"], form:"", colab:"", notebooklm:"", extra:""
    },
    "17": {
      module:"special", type:"assessment", title:"期末評量", term:"從資料、AI 到金融決策",
      question:"整合整學期能力，做出有證據、有邊界、能負責的判斷。",
      goals:["獨立形成資料問題與資料需求","使用分析、Benchmark 與來源證據做判斷","查核 AI 分析與過度推論","形成有條件、有邊界的金融／管理決策","負責任地溝通分析結果"],
      aiRole:"依正式期末評量規範執行；評量核心是學生能否獨立展現整合判斷能力。",
      human:["個人完成最終判斷與理由","把資料、證據、來源、限制與決策連成完整證據鏈","遵守正式評量規範"],
      materials:["slides","worksheet"], form:"", colab:"", notebooklm:"", extra:""
    },
    "18": {
      module:"special", type:"reflection", title:"回到起點", term:"線上彈性課程｜課程回顧與 AI 協作反思",
      question:"我現在怎麼看資料、AI 與金融決策？",
      goals:["回顧自己從 Week 1 到 Week 17 的能力變化","比較學期初與現在對資料與 AI 的看法","辨認最重要的 AI 協作與查核習慣","完成個人課程反思"],
      aiRole:"反思伙伴：可以協助整理歷程與提出追問，但不能替學生寫出個人反思。",
      human:["以自己的經驗說明真正的能力改變","指出仍不確定或需要繼續學習的地方","用自己的語言完成最後反思"],
      materials:["slides","worksheet"], form:"", colab:"", notebooklm:"", extra:""
    }
  }
};
