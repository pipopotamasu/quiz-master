import { mount } from "@vue/test-utils";
import assert from "power-assert";
import sinon from "sinon";
import AnswerResult from "@/components/quizzes/AnswerResult.vue";

describe("AnswerResult", () => {
  let wrapper;

  context("when corrected", () => {
    context("when answer not is number", () => {
      before(() => {
        wrapper = mount(AnswerResult, {
          propsData: {
            yourAnswer: "correct answer",
            correctAnswer: "correct answer"
          }
        });
      });
  
      it("render correct answer", () => {
        assert(wrapper.contains(".correct") === true);
        assert(wrapper.text() === "Your Answer: correct answer");
      });
    })

    context("when answer is number", () => {
      before(() => {
        wrapper = mount(AnswerResult, {
          propsData: {
            yourAnswer: "1",
            correctAnswer: "1"
          }
        });
      });
  
      it("render correct answer", () => {
        assert(wrapper.contains(".correct") === true);
        assert(wrapper.text() === "Your Answer: 1");
      });
    });

    context("when answer is number as word", () => {
      before(() => {
        wrapper = mount(AnswerResult, {
          propsData: {
            yourAnswer: "one",
            correctAnswer: "1"
          }
        });
      });
  
      it("render correct answer", () => {
        assert(wrapper.contains(".correct") === true);
        assert(wrapper.text() === "Your Answer: one");
      });
    });
  });

  context("when incorrected", () => {
    context("when answer not is number", () => {
      before(() => {
        wrapper = mount(AnswerResult, {
          propsData: {
            yourAnswer: "incorrect answer",
            correctAnswer: "correct answer"
          }
        });
      });
  
      it("render incorrect answer", () => {
        assert(wrapper.contains(".incorrect") === true);
        assert(wrapper.find('.your-answer').text() === "Your Answer: incorrect answer");
        assert(wrapper.find('.correct-answer').text() === "Correct Answer: correct answer");
      });
    });

    context("when answer is number", () => {
      before(() => {
        wrapper = mount(AnswerResult, {
          propsData: {
            yourAnswer: "incorrect answer",
            correctAnswer: "1"
          }
        });
      });
  
      it("render incorrect answer", () => {
        assert(wrapper.contains(".incorrect") === true);
        assert(wrapper.find('.your-answer').text() === "Your Answer: incorrect answer");
        assert(wrapper.find('.correct-answer').text() === "Correct Answer: 1 or one");
      });
    });
  });
});
