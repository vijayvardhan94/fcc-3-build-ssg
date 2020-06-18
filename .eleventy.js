
//509ad6dc159d4794b40dc22a3f92be19
  
module.exports = function(config){
    config.addPassthroughCopy("src/js");
    return {
        dir:{
            input: "src",
            output: "dist"
        }
    };

};