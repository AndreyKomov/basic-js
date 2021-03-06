
const chainMaker = {
  resultChainArr: [],
      getLength() {
        return this.resultChainArr.length;     //return curent lenght of resultChainArr
      },

      addLink(value) {
          this.resultChainArr.push("( " + value + " )");     //add to resultChainArr value
        return this;
      },

      removeLink(position) {                                                 //remove previous element
        if (position > 0 && position < this.resultChainArr.length) {
          this.resultChainArr.splice(position - 1, 1);
        } else {
          this.resultChainArr = [];
          throw new Error("wrong position");
        }
        return this;
      },

      reverseChain() {                                                    //reverse array
        this.resultChainArr = this.resultChainArr.reverse();
        return this;
      },

      finishChain() {
        let resultChain = this.resultChainArr.join("~~");
        this.resultChainArr = [];                                     //clear current array
        console.log(resultChain);
        return resultChain;
      }
};

module.exports = chainMaker;
