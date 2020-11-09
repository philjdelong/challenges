# Bob is a lackadaisical teenager. In conversation, his responses are very limited.

# Bob answers 'Sure.' if you ask him a question.

# He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

# He says 'Fine. Be that way!' if you address him without actually saying anything.

# He answers 'Whatever.' to anything else.

require 'pry'

class Bob
    attr_reader :question, :yell, :look, :something_else

    def initialize(question, yell, look, something_else)
        @question = question
        @yell = yell
        @look = look
        @something_else = something_else
    end
end

bob = Bob.new("Sure.", "Woah, chill out!", "Fine. Be that way!", "Whatever.")

binding.pry