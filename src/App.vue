<script setup>
import rulerRoom from './components/ruler-room.vue'
</script>

<template>
  <div class="app">
    <div class="header">顶部栏内容</div>

    <div class="nav">左侧导航内容</div>

    <div class="main">
      <div class="wapper">
        <ruler-room>
          <div>
            月之暗面科技有限公司（Moonshot
            AI）是一家专注于通用人工智能领域的公司，致力于将能源转化为智能，通过产品与用户共创智能，实现普惠AI。公司成立于2023年3月1日，其产品包括Kimi智能助手，这是一款网页版、App和小程序的智能助手，发布于2023年10月9日。Kimi智能助手能够支持约20万汉字的上下文输入，具备显著的中文优势，能够为用户提供回答问题、速读文件、整理资料、激发灵感、辅助创作等服务。此外，月之暗面科技还推出了Moonshot
            AI开放平台，供公测中。 Kimi智能助手能够为不同人群提供多样化的帮助：
            对于科研人员，Kimi可以快速阅读并深入理解大量文献，用母语掌握文献的精髓，解释复杂学术概念，分析研究结果，撰写论文，并回应审稿人的建议。
            对于大学生，Kimi可以帮助处理学习资料，提供学习指导，激发创作灵感，辅助写作和研究。
            对于互联网从业者，Kimi可以高效搜集信息，辅助竞品分析、运营策划等方案撰写。
            对于程序员，Kimi可以辅助编程、问题解答、代码注释、API文档阅读，支持多种编程语言。
            对于自媒体与内容创作者，Kimi可以学习特定风格，辅助创作；快速搜集创作所需信息，提供丰富的资料与灵感。
            对于金融和咨询分析师，Kimi可以通过即时搜索，帮助第一时间掌握行业动态和市场信息，并提供洞察与分析。
            对于法律从业人员，Kimi可以高效处理大量案件资料、整理证据、梳理法律政策，协助撰写法律文书和报告。
            如果您想向月之暗面科技有限公司（Moonshot
            AI）投递简历，可以通过提供的招聘联络邮箱进行投递。招聘联络邮箱为：hr@moonshot.ai。在准备简历时，请确保包含您的个人信息、教育背景、工作经验以及与应聘职位相关的技能和成就。
          </div>
          <!-- <img class="bg" src="./assets/bg.jfif"/> -->
        </ruler-room>
      </div>
    </div>
  </div>
</template>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}

.header {
  height: 100px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav {
  width: 200px;
  background-color: #f8f9fa;
  height: calc(100vh - 100px);
  position: fixed;
  overflow-y: auto;
}

.main {
  margin-left: 200px;
  height: calc(100vh - 100px);
  overflow: auto;
  background-color: #fff;
}
.wapper {
  background: #f5f5f5;
}
.bg {
  max-width: 100%;
  height: auto;
}
</style>
