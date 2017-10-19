// eslint-disable-next-line
import React, { Component } from "react";

/**
 * Компонент декоратора акккордиона
 */
export default Component =>
  class Accordion extends Component {
    /**
     * Храним состояние текущего открытого компонента
     * @type {Object}
     */
    state = {
      openItemId: null
    };
    /**
     * render
     * @return {ReactElement} разметка
     */
    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          isOpen={this.isOpen}
          openItem={this.openItem}
        />
      );
    }
    /**
     * При помощи каррирования храним текущий id и сравниваем его с id открытого компонента
     * @param  {string}  id текущий
     * @return {Boolean}    отправляем в props
     */
    isOpen = id => ev => {
      return id === this.state.openItemId;
    };
    /**
     * При помощи каррирования делаем логику повторного клика по статье и сохраняем id текущего активного элемента
     * @param  {string} openItemId текущего открытого элемента
     */
    openItem = openItemId => ev => {
      this.setState({
        openItemId: this.state.openItemId !== openItemId ? openItemId : null
      });
    };
  };
