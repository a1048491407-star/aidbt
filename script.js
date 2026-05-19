const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const showcaseImage = document.querySelector("#showcase-image");
const showcaseTitle = document.querySelector("#showcase-title");
const showcaseText = document.querySelector("#showcase-text");
const showcaseButtons = document.querySelectorAll(".showcase-tabs button");

const screens = {
  "script-factory": {
    title: "AI 脚本工厂",
    text: "选择平台、内容目标和语气风格，生成可直接进入分镜的营销脚本。",
    image: "./assets/screens/script-factory.png",
    alt: "AI脚本工厂界面截图",
  },
  storyboard: {
    title: "分镜确认",
    text: "所有镜头先在分镜台逐镜微调，满意后再进入成本预估和批量生成。",
    image: "./assets/screens/storyboard.png",
    alt: "AI分镜确认界面截图",
  },
  "asset-check": {
    title: "素材完整度检查",
    text: "基于当前分镜发现缺失素材，生成补图提示词，降低直接抽卡成本。",
    image: "./assets/screens/asset-check.png",
    alt: "素材完整度检查界面截图",
  },
  "cost-estimate": {
    title: "成本预估",
    text: "提交生成前展示镜头数、计划时长、模型调用和费用提醒。",
    image: "./assets/screens/cost-estimate.png",
    alt: "成本预估界面截图",
  },
  "project-knowledge": {
    title: "企业资料关联",
    text: "把品牌介绍、产品资料、FAQ 关联到项目，让 AI 生成更懂业务上下文。",
    image: "./assets/screens/project-knowledge.png",
    alt: "企业资料关联界面截图",
  },
  editor: {
    title: "智能剪辑工作台",
    text: "本地视频素材管理和剪辑任务调度在同一工作台继续完成。",
    image: "./assets/screens/editor.png",
    alt: "智能剪辑工作台界面截图",
  },
  "brand-review": {
    title: "品牌审核",
    text: "脚本、直播话术和产品文案上线前先过品牌语气与内容风险检查。",
    image: "./assets/screens/brand-review.png",
    alt: "品牌审核界面截图",
  },
};

menuButton?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

showcaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.screen;
    const next = screens[key];
    if (!next) return;

    showcaseButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    showcaseTitle.textContent = next.title;
    showcaseText.textContent = next.text;
    showcaseImage.src = next.image;
    showcaseImage.alt = next.alt;
  });
});
