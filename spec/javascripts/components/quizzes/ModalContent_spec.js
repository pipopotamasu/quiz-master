import { mount, createLocalVue } from "@vue/test-utils";
import assert from "power-assert";
import sinon from "sinon";
import Vuetify from "vuetify";
import ModalContent from "@/components/quizzes/ModalContent.vue";

const localVue = createLocalVue();
localVue.use(Vuetify);

describe("ModalContent", () => {
  let wrapper;

  before(() => {
    wrapper = mount(ModalContent, {
      propsData: {
        close: sinon.stub(),
        quiz: { content: "quiz content", answer: "quiz correct answer" }
      },
      stubs: {
        ModalActions: true,
        AnswerResult: true
      },
      localVue
    });
  });

  it("render initial elements", () => {
    assert(wrapper.contains(".quiz-content") === true);
    assert(wrapper.contains(".answer-input") === true);
    assert(wrapper.contains("modalactions-stub") === true);
  });

  describe("methods", () => {
    describe("updateAnserStatus()", () => {
      context("when input is blank", () => {
        before(() => {
          wrapper.vm.input = "";
          wrapper.vm.answered = false;
          wrapper.vm.has_error = false;
        });

        context("when exec described method", () => {
          let alert;
          before(() => {
            wrapper.vm.updateAnswerStatus();
            alert = wrapper.find(".v-alert");
          });

          it("has error", () => {
            assert(wrapper.vm.has_error === true);
            assert(wrapper.vm.answered === false);
            assert(alert.text().includes("Answer is required.") === true);
          });
        });
      });

      context("when input is not blank", () => {
        before(() => {
          wrapper.vm.input = "answer";
          wrapper.vm.answered = false;
          wrapper.vm.has_error = false;
        });

        context("when exec described method", () => {
          let alert;
          before(() => {
            wrapper.vm.updateAnswerStatus();
            alert = wrapper.find(".v-alert");
          });

          it("show answer result", () => {
            assert(wrapper.vm.has_error === false);
            assert(wrapper.vm.answered === true);
            assert(wrapper.contains("answerresult-stub") === true);
          });
        });
      });
    });

    describe("initialize()", () => {
      before(() => {
        wrapper.vm.input = "input";
        wrapper.vm.answered = true;
        wrapper.vm.has_error = true;
        wrapper.vm.initialize();
      });

      it("initizlize data props", () => {
        assert(wrapper.vm.input === "");
        assert(wrapper.vm.has_error === false);
        assert(wrapper.vm.answered === false);
      });
    });

    describe("reset()", () => {
      before(() => {
        wrapper.setMethods({ initialize: sinon.spy() });
        wrapper.vm.reset();
      });

      it("exec wrapped methods", () => {
        assert(wrapper.vm.close.calledOnce === true);
        assert(wrapper.vm.initialize.calledOnce === true);
      });
    });
  });
});
