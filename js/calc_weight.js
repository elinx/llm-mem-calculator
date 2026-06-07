var WEIGHT_SYMBOL_NAMES = {
  h: 'hidden_size', V: 'vocab_size',
  n_q: 'num_attention_heads',
  d_v: 'v_head_dim',
  q_r: 'q_lora_rank', o_r: 'o_lora_rank',
  qk: 'qk_head_dim', qk_nope: 'qk_nope_head_dim',
  I: 'intermediate_size', I_m: 'moe_intermediate_size',
  I_s: 'shared_expert_intermediate_size',
  N_e: 'n_routed_experts', N_s: 'n_shared_experts',
  L_d: 'dense_ffn_layers', L_m: 'moe_ffn_layers',
};

var WEIGHT_BAR_COLOR_MAP = {
  'attn': 'seg-full', 'ffn-dense': 'seg-full-alt',
  'ffn-shared': 'seg-compressed', 'ffn-expert': 'seg-indexer',
  'embed': 'seg-rope',
};
var WEIGHT_BAR_HEX_MAP = {
  'attn': '#4263eb', 'ffn-dense': '#f59e0b',
  'ffn-shared': '#e67700', 'ffn-expert': '#e03131',
  'embed': '#9c36b5',
};
var WEIGHT_LEGEND_LABEL_MAP = {
  'attn': 'Attention', 'ffn-dense': 'Dense FFN',
  'ffn-shared': 'Shared Expert', 'ffn-expert': 'Routed Experts',
  'embed': 'Embedding',
};

function calcWeight(model, wtPrecB) {
  return {
    totalParams: 0,
    totalBytes: 0,
    attnParams: 0,
    ffnDenseParams: 0,
    ffnSharedParams: 0,
    ffnExpertParams: 0,
    embedParams: 0,
    breakdown: [],
    formulas: [],
    formulaTitle: '',
    patterns: [],
    legendTypes: [],
  };
}
