import { m as markdocConfig, a as assetsConfig, c as createGetHeadings, b as createContentComponent, $ as $$Renderer } from './runtime-assets-config_K5Rx-Fs3.mjs';

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };




const tagComponentMap = {};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":false,\"attributes\":{\"level\":3},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":true,\"attributes\":{\"marker\":\"**\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":true,\"attributes\":{\"content\":\"What I Did:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"strong\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[2,11],\"inline\":false,\"attributes\":{\"ordered\":true,\"marker\":\".\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[2,4],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[2,3],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[2,3],\"inline\":true,\"attributes\":{\"marker\":\"**\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[2,3],\"inline\":true,\"attributes\":{\"content\":\"Studying the API:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":2},\"end\":{\"line\":3}}}],\"type\":\"strong\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":2},\"end\":{\"line\":3}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":2},\"end\":{\"line\":3}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,4],\"inline\":false,\"attributes\":{\"ordered\":false,\"marker\":\"-\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,4],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,4],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,4],\"inline\":true,\"attributes\":{\"content\":\"My journey began with diving deep into Carrefour's API. It's like understanding the secret sauce that powers their systems. I made sure every bit of it was clear to pave the way for a seamless integration.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":4}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":4}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":4}}}],\"type\":\"list\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":4}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":2},\"end\":{\"line\":4}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[4,6],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[4,5],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[4,5],\"inline\":true,\"attributes\":{\"marker\":\"**\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[4,5],\"inline\":true,\"attributes\":{\"content\":\"Planning and Managing Integration Flow:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":4},\"end\":{\"line\":5}}}],\"type\":\"strong\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":4},\"end\":{\"line\":5}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":4},\"end\":{\"line\":5}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":false,\"attributes\":{\"ordered\":false,\"marker\":\"-\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":true,\"attributes\":{\"content\":\"Once I had a handle on the API, my next mission was to plan and manage how NassWallet and Carrefour's systems would dance together. It's all about orchestrating a symphony of data flows to make your payment experience a breeze.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}}],\"type\":\"list\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":4},\"end\":{\"line\":6}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,8],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,7],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,7],\"inline\":true,\"attributes\":{\"marker\":\"**\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,7],\"inline\":true,\"attributes\":{\"content\":\"Guiding the Teams:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":7}}}],\"type\":\"strong\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":7}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":7}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":false,\"attributes\":{\"ordered\":false,\"marker\":\"-\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":true,\"attributes\":{\"content\":\"As the captain of the ship, I guided both our internal team and the fantastic engineering team at Carrefour. Together, we sailed through challenges and celebrated victories, ensuring that both systems integrated seamlessly.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"list\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":8}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,11],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,9],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,9],\"inline\":true,\"attributes\":{\"marker\":\"**\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,9],\"inline\":true,\"attributes\":{\"content\":\"Continuous Coordination for Quality Assurance:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":9}}}],\"type\":\"strong\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":9}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":9}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[9,11],\"inline\":false,\"attributes\":{\"ordered\":false,\"marker\":\"-\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[9,11],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[9,10],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[9,10],\"inline\":true,\"attributes\":{\"content\":\"A key to success was the continuous coordination with the development teams of both NassWallet and Carrefour. We worked hand in hand, ensuring that every step met our quality standards and that the end results were as expected.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":9},\"end\":{\"line\":10}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":9},\"end\":{\"line\":10}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":9},\"end\":{\"line\":11}}}],\"type\":\"list\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":9},\"end\":{\"line\":11}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":11}}}],\"type\":\"list\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":2},\"end\":{\"line\":11}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[11,12],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[11,12],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[11,12],\"inline\":true,\"attributes\":{\"marker\":\"**\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[11,12],\"inline\":true,\"attributes\":{\"content\":\"What It Means for You:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":11},\"end\":{\"line\":12}}}],\"type\":\"strong\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":11},\"end\":{\"line\":12}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":11},\"end\":{\"line\":12}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":11},\"end\":{\"line\":12}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[13,14],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[13,14],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[13,14],\"inline\":true,\"attributes\":{\"content\":\"With this integration, NassWallet has brought you the ability to pay at Carrefour markets in Iraq with just a few easy steps. Imagine the ease of completing your shopping and settling the bill effortlessly with NassWallet. It's all about making your life simpler and more connected.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":13},\"end\":{\"line\":14}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":13},\"end\":{\"line\":14}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":13},\"end\":{\"line\":14}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[15,16],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[15,16],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[15,16],\"inline\":true,\"attributes\":{\"content\":\"I'm truly proud to have played a key role in making this integration happen. Being part of a project that enhances your convenience and brings together two fantastic systems is what drives my passion for innovation.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":15},\"end\":{\"line\":16}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":15},\"end\":{\"line\":16}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":15},\"end\":{\"line\":16}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

const getHeadings = createGetHeadings(stringifiedAst, markdocConfig, options);
const Content = createContentComponent(
	$$Renderer,
	stringifiedAst,
	markdocConfig,
  options,
	tagComponentMap,
	nodeComponentMap,
);

export { Content, getHeadings };
