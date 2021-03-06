import { mount, createLocalVue } from "@vue/test-utils";
import assert from "power-assert";
import sinon from "sinon";
import Vuetify from "vuetify";
import ModalActions from "@/components/quizzes/ModalActions";

const localVue = createLocalVue();
localVue.use(Vuetify);

describe("ModalActions", () => {
  let wrapper;

  context("when not answered", () => {
    let buttons, backButton, answerButton;
    before(() => {
      wrapper = mount(ModalActions, {
        propsData: {
          close: sinon.stub(),
          updateAnswerStatus: sinon.stub(),
          answered: false
        },
        localVue
      });
      buttons = wrapper.findAll(".v-btn");
      backButton = buttons.at(0);
      answerButton = buttons.at(1);
    });

    it("render buttons", () => {
      assert(buttons.length === 2);
      assert(backButton.text() === "BACK");
      assert(answerButton.text() === "ANSWER");
    });

    context("when click button", () => {
      before(() => {
        backButton.trigger("click");
        answerButton.trigger("click");
      });

      it("should call methods", () => {
        assert(wrapper.props().close.calledOnce === true);
        assert(wrapper.props().updateAnswerStatus.calledOnce === true);
      });
    });
  });

  context("when answered", () => {
    let buttons, closeButton;
    before(() => {
      wrapper = mount(ModalActions, {
        propsData: {
          close: sinon.stub(),
          updateAnswerStatus: sinon.stub(),
          answered: true
        },
        localVue
      });
      buttons = wrapper.findAll(".v-btn");
      closeButton = buttons.at(0);
    });

    it("render buttons", () => {
      assert(buttons.length === 1);
      assert(closeButton.text() === "CLOSE");
    });

    context("when click button", () => {
      before(() => {
        closeButton.trigger("click");
      });

      it("should call methods", () => {
        assert(wrapper.props().close.calledOnce === true);
      });
    });
  });
});
