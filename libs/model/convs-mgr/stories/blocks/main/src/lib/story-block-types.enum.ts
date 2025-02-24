/**
 * Different types and roles a block can play
 */
export enum StoryBlockTypes {
  /**
   * Block that marks the beginning of a story
   * Automatically loaded on the editor when user creates a story
   */
  AnchorBlock = 0,
  /** 
   * Block only produces message output and will not wait for input. 
   * 
   * Block examples: Sending messages
   * Usage         : Operator sends a message, terminal chatflow, ...
   */
  TextMessage = 1,

  /** 
   * Block only waits for input and has no leading message. 
   * Block examples: get location, get audio, get message, ... 
   * Usage         : operator awaits feedback, ... */
  Input = 2,

  /**
   * Block that sends a location to the userxs
   */
  Location = 4,

  QuestionBlock = 6,

  ListBlock = 16,

  /**
   * Block that sends an audio as output to the user 
   */
  Audio = 8,

  /**
   * Block that sends a message to the user in form of a video
   */
  Video = 13,

  /** 
   * Block sends message then expects input.
   * Block examples: buttons question, ...
   * Usage         : bot scenario-designs */
  IO = 3,

  /**
   * Block redirects to StorySection with other scenario.
   * Usage         : structuring and reusing scenario-designs */
  Structural = 9,

  /**
   * Block that sends an image and expects no input from the user 
   */
  Image = 5,

  ImageInput = 50,

  /**
   * Block that waits for the user to return their name as input
   */
  Name = 10,

  /**
   * Block that waits for the user to enter their email address as input
   */
  Email = 11,

  /**
   * Block that waits for the user to enter their phone-number as input
   */
  PhoneNumber = 12,

  /**
   * Block that sends a document to the user as output
   */
  Document = 7,

  /**
   * Block that sends a sticker to the user as a message
   */
  Sticker = 15,

  ErrorBlock = 999,

  /**
   * Block that sends a message to the user and expects a list of items to be returned
   */
  List = 16,

  /**
   * Block that expects input from the user by replying to a message
   */
  Reply = 17,

  /**
   * Block that allows linking a different story within the same story.
   */
  JumpBlock = 18,

  /**
   * Block that sends a list of items for user to choose and asks a question if they want to choose again
   */
  MultipleInput = 19,

  /** */
  FailBlock = 20,
  AudioInput = 21,
  LocationInputBlock = 22,
  VideoInput = 23,

  /** Block that calls a specified URL endpoint when hit */
  WebhookBlock = 25,

  /**
   * Block that accepts any type of input
   */
  MultiContentInput = 28,

  /**
   * Block that accepts an Open-ended answer from the user
   */
  OpenEndedQuestion = 27,

  /**
   * Block that processes a user response and determines the next step/block
   */
  keyword = 29,

  /** 
   * Block that tracks when a user reaches a certain action
  */
  Event = 30,

  EndStoryAnchorBlock = 9999,
}

export function isOutputBlock(blockType: StoryBlockTypes): boolean {
  switch (blockType) {
    case StoryBlockTypes.TextMessage:
      return true;
    case StoryBlockTypes.Image:
      return true;
    case StoryBlockTypes.Audio:
      return true;
    case StoryBlockTypes.Video:
      return true;
    case StoryBlockTypes.Sticker:
      return true;
    case StoryBlockTypes.Document:
      return true;
    default:
      return false;
  }
}
/**
 * Checks whether a storyblock is a structural block
 * 
 * TODO: Group major story block types into different enums/namespaces 
 *  e.g. IO blocks, structual blocks, output blocks
 * @param blockType 
 */
export function isOperationBlock(blockType: StoryBlockTypes)
{
  switch (blockType) {
    case StoryBlockTypes.JumpBlock:
      return true;
    case StoryBlockTypes.EndStoryAnchorBlock:
      return true;
    case StoryBlockTypes.FailBlock:
      return true;
    case StoryBlockTypes.WebhookBlock:
      return true;
    case StoryBlockTypes.keyword:
      return true;
    case StoryBlockTypes.Event:
      return true;
    default:
      return false;
  }
}

export function isMediaBlock(blockType: StoryBlockTypes): boolean {
  switch (blockType) {
    case StoryBlockTypes.Image:
      return true;
    case StoryBlockTypes.Audio:
      return true;
    case StoryBlockTypes.Video:
      return true;
    case StoryBlockTypes.Sticker:
      return true;
    case StoryBlockTypes.Document:
      return true;
    default:
      return false
  }
}