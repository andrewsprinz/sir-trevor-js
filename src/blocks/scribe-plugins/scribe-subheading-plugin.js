"use strict";

var scribeSubHeadingPlugin = function(block) {
  return function(scribe) {

    const subheadingCommand = new scribe.api.Command('subheading');
    subheadingCommand.queryEnabled = () => {
      return block.inline_editable;
    };
    subheadingCommand.queryState = () => {
      return block.type === 'subheading';
    };

    const getBlockType = function() {
      return subheadingCommand.queryState() ? 'Text' : 'Subheading';
    };

    subheadingCommand.execute = function subheadingCommandExecute(value) {
      var data = {
        format: 'html',
        text: block.getScribeInnerContent()
      };

      block.mediator.trigger("block:replace", block.el, getBlockType(), data);
    };

    scribe.commands.subheading = subheadingCommand;
  };
};

module.exports = scribeSubHeadingPlugin;
